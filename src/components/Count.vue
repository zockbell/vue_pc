<template>
  <div class="countWrapper">
    <div class="vuex_demo">
      <Button type="primary" @click="deHandle({step: 2})">-</Button>
      <span>{{count}}</span>
      <Button type="primary" @click="addHandle">+</Button>
    </div>
    <p>{{num2}}</p>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import * as Types from '../store/mutationsType';
import { Button } from 'iview';
Vue.component('Button', Button);

export default {
  name: 'count',
  computed: {
    ...mapGetters('count', {
      num2: 'filterCount',
    }),
    ...mapState('count', ['count']),
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    // 加
    ...mapActions('count', {
      addHandle: 'addAction',
    }),

    // 减
    ...mapMutations('count', { // 使用辅助函数再传参，需要在@click方法调用时传参
      deHandle: Types.DECREMENT,
    }),
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/components/count';
</style>
