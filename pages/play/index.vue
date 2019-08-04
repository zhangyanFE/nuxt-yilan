<template>
    <div class="wrapper">
        <VideoPlayer />
        <div class="recommend-container">
            <RecommendList>
                <RecommendTitle />
            </RecommendList>
        </div>
    </div>
</template>

<script>
// import { getUdid, getUid } from '~/assets/utils';
import { mapState } from 'vuex';
import VideoPlayer from '~/components/VideoPlayer';
import RecommendTitle from '~/components/RecommendTitle';
import RecommendList from '~/components/RecommendList';

export default {
    data() {
        return {
            
        }
    },
    components: {
        VideoPlayer,
        RecommendTitle,
        RecommendList
    },
    head() {
        return {
            title: `播放页面`,
            meta: [{
                name: 'spm-id',
                content: '10047'
            }]
        }
    },
    computed: {
        ...mapState({
            videoList: state => state.play.list,
            recommendList: state => state.play.recommentList,
        })
    },
    mounted() {
        
    },
    async asyncData(ctx) {

    }
}
</script>

<style>

</style>
