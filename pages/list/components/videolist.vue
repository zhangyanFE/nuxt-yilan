<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 23:42:55
 * @LastEditTime: 2019-08-11 19:05:21
 * @LastEditors: Please set LastEditors
 -->
<template>
      <div class="video-list">
        <div class="video-list-box">
            <ul>
                <li class="item"
                    v-for="(item, index) of list"
                    :key="index"
                    :videoid="`${item.video_id}`"
                    ref="listItem"
                    @click="showPopup(item)">
                    <!-- <a href="" target="_blank"> -->
                        <img :src="item.image" class="opct-img">
                        <div class="vague-bg" :style="`background-image: url(${item.image})`"></div>
                        <div class="ones-bg" :style="`background-image: url(${item.image})`"></div>
                        <div class="video-info"
                            v-if="item.provider && item.provider.avatar && item.image">
                            <h3>@ {{ item.provider.name }}</h3>
                            <div class="right-info">
                                <img :src="zanImg" alt="点赞">
                                <p>{{ item.like_num > 10000 ? Math.floor((item.like_num) / 100) / 100 + '万' : item.like_num }}</p>
                            </div>
                        </div>
                    <!-- </a> -->
                </li>
            </ul>
        </div>
        <van-popup
            round
            v-model="show"
            position="bottom"
            :style="{ height: '66%' }"
        >
            <div class="pop">
                <div class="pop-tit">{{curItem}}</div>
                <img class="video-img" :src="videoImg" alt="">
            </div>
        </van-popup>
    </div>
</template>

<script>
// import { getUrlParams, sendSpm } from "~/plugins/util";
import Url from '~/plugins/url'

export default {
  name: 'videoList',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    logId: null
  },
  computed: {
    getAccessKey() {
      return new Url(window.location.href).get('access_key') || 'ylel2vek386q'
    }
  },
  data() {
    return {
      zanImg: 'https://static.yladm.com/Transformers/images/zanEnd.png',
      eleArr: [],
      show: false,
      curItem: '',
      videoImg: ''
    }
  },
  watch: {
    list(newData, oldData) {
      if (newData) {
        // this.setWebLog();
      }
    }
  },
  mounted() {
    // this.init();
  },
  destroyed() {
    this.eleArr = [];
  },
  methods: {
    init() {
      this.setWebLog();
    },
    showPopup(item) {
      const { video_id, title, image } = item;
      this.show = true;
      this.curItem = title;
      this.videoImg = image;
    },
    handleClick(videoId) {
      // 小视频点击埋点上报
      sendSpm({
        spmID: '10024',
        type: 1,
        eventName: 'click',
        data: {
          videoid: videoId,
          referpage: 'ugcfeed'
        }
      })
    },
    setWebLog() {
      setTimeout(() => {
        const listItem = this.$refs.listItem
        listItem && this.recommendListWebLog(listItem)
        window.addEventListener(
          'scroll',
          () => {
            listItem && this.recommendListWebLog(listItem)
          },
          true
        )
      }, 800)
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
              sendSpm({
                spmID: "10026",
                type: 1,
                eventName: "videoshow",
                data: {
                  videoid: videoId,
                  logid: this.logId,
                  referpage: "ugcfeed",
                  pos: parseInt(i + 1)
                }
              });
            }
            this.eleArr.push(i);
          }
        }
    }
  }
}
</script>

<style lang="scss" scoped>
$rem: 75;
@function conver($n) {
  @return $n / $rem + unquote('rem');
}
.pop {
  .pop-tit {
    font-weight: 700;
    font-size: 24px;
    color: #000;
    padding: 15px;
  }
  .video-img{
    display: block;
    width: 80%;
    height: 100%;
    border-radius: 3%;
    margin: 0 auto;
  }
}
.video-list-box {
  background: #17172b;
  ul {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    .item {
      background-color: #ffffff;
      width: 50%;
      /* height: 333.33px; */
      position: relative;
      box-sizing: border-box;
      .opct-img {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        z-index: 2;
        display: block;
        border: none;
      }
      .vague-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(15px);
        -moz-filter: blur(15px);
        -o-filter: blur(15px);
        -ms-filter: blur(15px);
        filter: blur(15px);
      }
      .ones-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        z-index: 2;
      }
      .video-info {
        position: absolute;
        padding-bottom: conver(18);
        padding-left: conver(20);
        padding-top: conver(30);
        display: flex;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 2;
        box-sizing: border-box;
        justify-content: space-between;
        color: #ffffff;
        background-image: -webkit-gradient(
          linear,
          100% 0%,
          100% 100%,
          from(rgba(0, 0, 0, 0)),
          to(rgba(0, 0, 0, 0.6))
        );
        h3 {
          height: conver(38);
          font-size: conver(28);
          font-family: 'PingFangSC-Medium';
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: conver(38);
          width: conver(220);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .right-info {
          z-index: 2;
          text-align: center;
          display: flex;
          img {
            display: block;
            width: conver(32);
            height: conver(32);
            border-radius: 50%;
            margin: conver(2) auto 0;
          }
          p {
            font-size: conver(24);
            font-family: 'PingFangSC-Regular';
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: conver(34);
            margin: 0 conver(12) 0 conver(3);
            text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
}
</style>

