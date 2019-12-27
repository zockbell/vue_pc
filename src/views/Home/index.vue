<template>
  <div class="homeWrapper">
    <div>home</div>
    <div>{{number | discountRmbPrice}}</div>
    <Count />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Vue from 'vue';
import Count from '@/components/Count';

export default {
  name: 'home',
  components: {
    // HelloWorld,
    Count,
  },
  data() {
    return {
      number: 1200.062,
    };
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/home';
</style>
