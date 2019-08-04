<template>
    <div class="wrapper">
        <ul>
            <li v-for="item in videoList" :key="item.name">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
// import { getUdid, getUid } from '~/assets/utils';
import Autograph from '~/assets/autographPlat';
export default {
    data() {
        return {
            videoList: []
        }
    },
    head() {
        return {
            title: `播放页面`,
        }
    },
    mounted() {
        this.videoList = window.__NUXT__ && window.__NUXT__.data[0].bitrates;
    },
    async asyncData(ctx) {

        // let data = {
        //     access_key: 'yluyh22n5kdq',
        //     id: 'r1yob6eOk5Lo'
        // };
        // let req = data;
        // let udid = '41a0fa2489927292dd17aac2787ebd15';
        // let uid = '1';
        // const timestamp = new Date() * 1;
        // const { access_key, id } = data;
        // let signData = {
        //     access_key,
        //     id,
        //     timestamp,
        //     udid,
        //     uid,
        // };
        // let getsign = Autograph(signData);
        // req.sign = getsign;
        // req.timestamp = timestamp;
        // req.udid = udid;
        // req.uid = uid;
        // try {
        //     const { status, data: { retcode, bitrates } } = await ctx.$axios.get(`https://openapis.yladm.com/plat/play`, {
        //         params: req
        //     });
        //     if(status == 200) {
        //         return {
        //             bitrates
        //         }
        //     }
        // } catch (error) {
        //     return [];
        // }
    }
}
</script>

<style>

</style>
