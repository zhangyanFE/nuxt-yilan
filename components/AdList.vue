<template>
    <div class="ad-container" :id="`adBox${idx}`"></div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "adModule",
  props: {
    idx: {
      type: Number,
      default: 0
    },
  },
  computed: {

  }
};
</script>
<style lang="scss" scoped>
$rem: 75;
@function conver($n) {
  @return $n * 2 / $rem + unquote("rem");
}

.ad-container{
  display: none;
  border-bottom: conver(0.5) solid #e5e5e5;
  padding: 15px 0;
  overflow: hidden;
}
</style>


