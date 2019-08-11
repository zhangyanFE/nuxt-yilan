<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 14:50:50
 * @LastEditTime: 2019-08-10 15:14:12
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="wrap">
        <van-tabs sticky>
            <van-tab class="list-item" v-for="index in 8" :title="'标签 ' + index" :key="index">
                内容 {{ index }}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.wrap{
    height: 1200px;
}
.list-item{
    height: 200px;
    background: #999;
}
</style>
