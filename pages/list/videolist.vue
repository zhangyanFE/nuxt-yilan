<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 23:38:52
 * @LastEditTime: 2019-08-10 14:37:35
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="wrapper">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :animation-duration="600">
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <video-list :list="videoList" :logId="logId" />
          </van-list>
      </van-pull-refresh>
    </div>
</template>

<script>
import API from '~/server/interface/utils/api';
import Url from "~/plugins/url";
import VideoList from "./components/videolist";
export default {
  name: "listPage",
  components: {
    VideoList
  },
  asyncData(ctx) {
    // ctx.init();
  },
  data() {
    return {
      videoList: [],
      page: 1,
      logId: 0,
      count: 0,
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  destroyed() {
    this.page = 1;
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.accessKey = new Url(window.location.href).get("access_key") || "ylel2vek386q";
    },
    async onRefresh() {
      try {
        const params = {
          access_key: this.accessKey,
          page: this.page++,
          size: 10,
        };
        const { data, retcode, logid } = await API.videoListApi(params);
        if (retcode == 200 && data && data.length) {
          setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
          }, 500)
          // this.videoList.unshift(this.videoList.concat(data))
          // console.log(this.videoList)
          // this.videoList = this.videoList.unshift(data);
          this.logId = logid;
        }
      } catch (error) {
        console.log(error);
      }
    },
    onLoad() {
      this.getList();
    },
    async getList() {
      try {
        const params = {
          access_key: this.accessKey,
          page: this.page++,
          size: 10,
        };
        const { data, retcode, logid } = await API.videoListApi(params);
        console.log(data)
        if (retcode == 200 && data && data.length) {
          this.videoList = this.videoList.concat(data);
          // 加载状态结束
          this.loading = false;
          this.logId = logid;
        } else {
          // 数据全部加载完成
          this.finished = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss">
.page-error {
  text-align: center;
  padding-top: 2rem;
  color: #999;
  font-size: 0.4rem;
}
</style>

