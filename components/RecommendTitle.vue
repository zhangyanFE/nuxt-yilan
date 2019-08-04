<template>
    <div class="recommend-title">
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
  name: "recommendTit",
  props: {
    title: {
      type: String,
      default: "为你推荐"
    }
  }
};
</script>

<style lang="scss" scoped>
$rem: 75;
@function conver($n) {
  @return $n * 2 / $rem + unquote("rem");
}

.recommend-title {
  font-family: "PingFangSC-Medium";
  font-size: conver(16);
  color: #323232;
  padding: conver(18) 0 conver(20);
  /* margin-bottom: conver(10); */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    z-index: 10;
    bottom: conver(8);
    left: 0;
    right: 0;
    height: conver(1);
    border-bottom: conver(0.5) solid #e5e5e5;
  }
  span {
    padding-bottom: conver(5);
    &:after {
      content: "";
      position: absolute;
      bottom: conver(8);
      left: 0;
      right: 0;
      background: #f00;
      width: conver(65);
      height: conver(0.5);
      z-index: 11;
    }
  }
}
</style>
