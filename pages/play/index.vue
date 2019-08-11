<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-06 13:38:57
 * @LastEditTime: 2019-08-11 19:18:38
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="wrapper">
        <VideoPlayer />
        <VideoInfo />
        <div class="recommend-container">
            <RecommendList>
                <RecommendTitle />
            </RecommendList>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { distinctArr } from '~/plugins/util.client';
import API from '~/server/interface/utils/api';
import VideoPlayer from '~/components/VideoPlayer';
import VideoInfo from '~/components/VideoInfo';
import RecommendTitle from '~/components/RecommendTitle';
import RecommendList from '~/components/RecommendList';

export default {
    data() {
        return {
            
        }
    },
    components: {
        VideoPlayer,
        VideoInfo,
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
            adInfo: state => state.play.adInfo,
        })
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            const { ad_list, ad_platform } = this.adInfo;
            if (ad_list && ad_list.length) {
                let resultArr = [];
                let adList = [];
                let adIds = [];
                let adBottom = {};
                let adBannerIdArr = [];
                let adListIdArr = [];
                let adPrepostedIdArr = [];
                ad_list.map((item, index) => {
                if (item.position == "banner") {
                    adBannerIdArr = item.ad_ids;
                    adBannerIdArr.map((key, val) => {
                        adList.push({
                            el: adBannerIdArr.length == 1 ? 'bannerAd' : `bannerAd${parseInt(val)}`,
                            id: adBannerIdArr[val],
                            ad_type: "banner"
                        });
                    });
                    // banner广告数组
                    $(`#bannerAd${parseInt(index)}`).html('');
                    this.adBannerListArr = adBannerIdArr;
                } else if (item.position == "relate") {
                    adListIdArr = item.ad_ids;
                    for(let index = 0; index < adListIdArr.length; index++) {
                    const idElement = item.ad_ids[index];
                    $(`#adBox${parseInt((index * item.interval_num + item.first_pos * 1))}`).html('');
                    adList.push({
                        el: `adBox${parseInt((index * item.interval_num + item.first_pos * 1))}`,
                        id: idElement,
                        ad_type: "relate"
                    });
                    }
                } else if(item.position == "pre_player") {
                    adPrepostedIdArr = item.ad_ids;
                    adPrepostedIdArr.map((key, val) => {
                    adList.push({
                        el: `vPreAd${parseInt(val)}`,
                        id: adPrepostedIdArr[val],
                        ad_type: "pre_player"
                    });
                    });
                    // 前贴广告数组
                    $(`#vPreAd${parseInt(index)}`).html('');
                    this.adPrepostedListArr = adPrepostedIdArr;
                }
                // 广告抄底
                if (item.ad_bottom) {
                    let ad = JSON.parse(item.ad_bottom);
                    for (const key in ad) {
                    if (ad.hasOwnProperty(key)) {
                        adBottom[key] = ad[key];
                    }
                    }
                }
                // 合并adIds
                if (item.ad_ids && item.ad_ids.length > 0) {
                    adIds = distinctArr(adIds.concat(item.ad_ids));
                }
                });
                window.YLAD &&
                window.YLAD.initADdata({
                    ad_platform,
                    ad_bottom: adBottom
                });
                setTimeout(() => {
                        window.YLAD &&
                    window.YLAD.addAdRefresh({
                        ad_list: adList,
                        ad_platform:2
                    });
                    }, 500)
            }
        }
    },
    async asyncData(ctx) {

    }
}
</script>

<style>

</style>
