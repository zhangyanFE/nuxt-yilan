<template>
    <div class="wrapper">
        <!-- <ul>
            <li v-for="item in recommendList" :key="item.title">{{ item.title }}</li>
        </ul> -->
        <RecommendList />
    </div>
</template>

<script>
// import { getUdid, getUid } from '~/assets/utils';
import { mapState } from 'vuex';
import RecommendList from '~/components/RecommendList';

export default {
    data() {
        return {
            
        }
    },
    components: {
        RecommendList
    },
    head() {
        return {
            title: `播放页面`,
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
