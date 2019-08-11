<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 20:59:49
 * @LastEditTime: 2019-08-11 18:39:57
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
        <van-button type="primary" @click="showPopup">
            展示弹出层
        </van-button>
        <!-- <van-popup v-model="show">内容</van-popup> -->
        <van-popup
            round
            v-model="show"
            position="bottom"
            :style="{ height: '80%' }"
        >
            <List />
        </van-popup>
        
        <!-- <van-popup
            v-model="show"
            position="right"
            :style="{ width: '60%', height: '100%' }"
        >
            <div class="pop">
                <div class="pop-tit">通知</div>
            </div>
        </van-popup> -->
    </div>
</template>

<script>
import List from '../list/videolist';

export default {
    components: {
        List
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.pop{
    .pop-tit{
        font-weight: 700;
        font-size: 24px;
        color: #000;
        padding: 15px;
    }
}
</style>
