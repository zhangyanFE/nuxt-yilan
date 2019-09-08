<template>
    <div class="ylplayer-container">
      <div id="J_ylplayer"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
      return {
          ylplayer: null,
      }
  },
  computed: {
    ...mapState({
      videoSource: state => state.play.list,
      adInfo: state => state.play.adInfo,
    }),
  },
  mounted() {
    this.getPlayer()
  },
  methods: {
    getCoverUrl() {
      if(this.adInfo && this.adInfo.video_info) {
        const { still, name } = this.adInfo.video_info;
        return still;
      }
    },
    getPlayer() {
      this.ylplayer = new YLPlayer({
        container: document.getElementById('J_ylplayer'),
        preload: 'auto',
        trackLogParams: {
          videoId: 'zvyOb0NwX5m7'
        },
        video: {
          url: this.videoSource[2].uri,
          pic: this.getCoverUrl()
        },
        // autoplay: true,
        trackLog: true
      })
    }
  }
}
</script>

<style>
.ylplayer-container{
    width: 100%;
    height: 5.62667rem;
    background: #000;
}
</style>
