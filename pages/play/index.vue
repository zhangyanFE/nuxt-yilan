<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in videoList" :key="item.name">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
// import { getUdid, getUid } from '~/assets/utils';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    head() {
        return {
            title: `播放页面`,
        }
    },
    computed: {
        ...mapState({
            videoList: state => state.play.list
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
