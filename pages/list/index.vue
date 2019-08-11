<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 21:45:04
 * @LastEditTime: 2019-08-11 17:33:02
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :animation-duration="500">
            <p>刷新次数: {{ count }}</p>
            <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                >
                <transition-group tag="ul" name="slide-fade">
                    <!-- <van-cell
                        v-for="item in list"
                        :key="item"
                        :title="item"
                    /> -->
                    <li
                     class="list-item"
                     v-for="item in list"
                     :key="item">
                     {{ item }}
                    </li>
                </transition-group>
                </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            count: 0,
            isLoading: false,
            loading: false,
            finished: false
        }
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
                this.count++;
            }, 500)
        },
        onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 20; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 100) {
                    this.finished = true;
                }
            }, 500);
        }
    }
}
</script>

<style>
.list-item{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
    text-align: center;
}
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>
