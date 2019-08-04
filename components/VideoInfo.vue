<template>
    <div class="video-info-container">
        <div class="video-title">
            {{ getVideoInfo }}
        </div>
        <!-- <div class="video-desc" v-if="videoInfo.videoSource!=''">{{ videoInfo.videoSource }}</div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState({
            videoInfo: state => state.play.adInfo
        }),
        getVideoInfo() {
            if(this.videoInfo.video_info) {
                const { name: title } = this.videoInfo.video_info;
                return title;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$rem: 75;
@function conver($n) {
  @return $n * 2 / $rem + unquote("rem");
}

.video-info-container {
    background: #ffffff;
    padding: conver(20) conver(15) conver(15) conver(15);
    border-bottom: conver(0.5) solid #e5e5e5;
    &.mtop{
        margin-top: conver(211);
    }
    .video-title {
      font-family: "PingFangSC-Medium";
      font-size: conver(18);
      color: #323232;
      height: conver(43);
      line-height: conver(22);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .video-desc {
      margin-top: conver(10);
      font-size: conver(12);
      color: #999;
    }
  }
</style>
