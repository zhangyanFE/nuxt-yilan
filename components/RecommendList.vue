<template>
    <div :class="['recommend-box', (isTop && !adBannerListArr.length) && 'top']">
        <slot></slot>
        <div class="recommend-list">
            <div class="list-item-box"
                v-for="(item, index) of recommendList"
                :key="index"
                ref="listItem"
                :videoid="`${item.video_id}`"
                @click="handleJumpList(item, index)">
                  <a :href="`/Brawn/general.html?id=${item.video_id}&preid=${item.video_id}&access_key=`" target="_blank">
                      <!-- 广告位 -->
                      <!-- <ad-list :idx="index" :adList="recommendList" /> -->
                      <div class="list-item">
                        <template v-if="!listStyle">
                            <div class="list-item-left">
                                <img class="video-img" :src="item.image" :key="item.image" alt="icon">
                            </div>
                            <div class="list-item-right">
                                <div class="list-item-title">
                                    {{ item.title }}
                                </div>
                                <div class="list-item-footer">
                                    <span class="domain-name">{{ item.provider.name }}</span>
                                    <span class="domain-playnum">{{ item.play_num }}次播放</span>
                                </div>
                            </div>
                        </template>
                        <template v-if="listStyle">
                            <div class="list-item-right">
                              <div class="list-item-title">
                                  {{ item.title }}
                              </div>
                              <div class="list-item-footer">
                                  <span class="domain-name">{{ item.provider.name}}</span>
                                  <span class="domain-playnum">{{ item.play_num }}次播放</span>
                              </div>
                            </div>
                            <div class="list-item-left mr">
                                <img class="video-img" :src="item.image" :key="item.image" alt="icon">
                            </div>
                        </template>
                    </div>
                  </a>
            </div>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
// import {
//   timestampToDateTimeFull,
//   conversionUnit,
//   sendSpm,
//   distinctArr,
//   getUrlParams,
//   envVariable
// } from "@/lib/util";
// import Url from "@/lib/url";
// import AdList from "@/components/AdList";

export default {
  name: "recommendList",
  props: {
    eleArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    adBannerListArr: {
      type: Array,
      default: () => {
        return [];
      }
    },
    logId: {
      type: null
    },
    defaultReferpage: {
      type: String,
      default: "vplaypage"
    }
  },
  components: {
    // AdList
  },
  computed: {
        ...mapState({
            videoList: state => state.play.list,
            recommendList: state => state.play.recommendList,
        })
    },
  data() {
    return {
      isTop: false, // 视频是否置顶(不置顶: top=0、置顶: top=1)
      listStyle: false // 推荐列表(左文右图: tj=0、左图右文: tj=1)
    };
  },
  filters: {
    timeConversion(time) {
      return timestampToDateTimeFull(time);
    },
    getUnit(num) {
    //   return conversionUnit(num);
    return 1;
    }
  },
  created() {
      console.log(this.recommendList)
    // this.init();
  },
  methods: {
    init() {
      this.setWebLog();
      this.videoTop();
    },
    setWebLog() {
      setTimeout(() => {
        const listItem = this.$refs.listItem;
        listItem && this.recommendListWebLog(listItem);
        window.addEventListener(
          "scroll",
          () => {
            this.recommendListWebLog(listItem);
          },
          false
        );
      }, 800);
    },
    recommendListWebLog(listItem) {
      // 精彩推荐展现埋点上报
      const windowH =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight; // 浏览器高度兼容写法
      for (let i = 0; i < listItem.length; i++) {
        const curItem = listItem[i];
        const pos = curItem.getBoundingClientRect();
        const videoId = curItem.getAttribute("videoid");
        const obj_ = {
          top: pos.top,
          bottom: pos.bottom,
          left: pos.left,
          right: pos.right
        };
        if (
          obj_.top >= 0 &&
          obj_.top < windowH &&
          obj_.bottom >= 0 &&
          obj_.bottom <= windowH
        ) {
          let isIn = this.eleArr.indexOf(i);
          if (isIn == -1) {
            // sendSpm({
            //   spmID: "10026",
            //   type: 1,
            //   eventName: "videoshow",
            //   data: {
            //     videoid: videoId,
            //     logid: this.logId,
            //     referpage: this.defaultReferpage,
            //     pos: parseInt(i + 1)
            //   }
            // });
          }
          this.eleArr.push(i);
        }
      }
    },
    handleJumpList(item, index) {
        console.log(item)
    //   this.$parent.$emit("jumpList", {
    //     item,
    //     index
    //   });
    }
  }
};
</script>

<style lang="scss" scoped>
$rem: 75;
@function conver($n) {
  @return $n * 2 / $rem + unquote("rem");
}

.recommend-box {
  background: #ffffff;
  padding: 0 conver(15);
  &.top {
    /* margin-top: conver(290); */
  }
  .recommend-list {
    .list-item-box {
      &:first-child {
        padding-top: 0;
      }
    }
    .list-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding: conver(13) 0;
      border-bottom: conver(0.5) solid #e5e5e5;
      color: #323232;
      a {
        border-bottom: conver(1) solid #f3f3f3;
        color: #323232;
      }
      .list-item-right {
        width: conver(230);
        &.general-r {
          width: conver(116.5);
        }
      }
      .list-item-title {
        width: conver(223);
        height: conver(43);
        line-height: conver(22);
        overflow: hidden;
        font-size: conver(16);
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .list-item-footer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: conver(8);
        color: #a8a8a8;
        span {
          font-family: "PingFangSC-Regular";
          font-size: conver(12);
        }
        .domain-name {
        }
        .domain-playnum {
          padding-left: conver(13);
        }
      }
      .list-item-left {
        /* width: conver(111);
        height: conver(70); */
        width: 120px;
        height: 68px;
        position: relative;
        margin-right: conver(10);
        &.general-l {
          width: conver(230);
        }
        &.mr {
          margin-right: 0;
        }
      }
      .video-img {
        /* width: conver(112);
        height: conver(68); */
        width: 120px;
        height: 68px;
        overflow: hidden;
        display: block;
        object-fit: cover;
      }
    }
  }
}
</style>

