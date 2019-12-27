import * as Types from '../mutationsType';

export default {
    namespaced: true,
    /**
     * 唯一容器state
     */
    state: {
      count: 100,
    },

    getters: {
        filterCount: (state: any) => state.count >= 120 ? 120 : state.count,
    },

    mutations: {
        /**
         * 增加
         * @param {*} state 数据
         * @param {*} payload 载荷
         */
        [Types.INCREMENT](state: any, payload: any) {
            state.count += payload.step;
        },

        /**
         * 减少
         * @param {*} state 数据
         * @param {*} payload 载荷
         */
        [Types.DECREMENT](state: any, payload: any) {
            state.count -= payload.step;
        },
    },
    actions: {
        /**
         * action 事件处理
         * @param {*} param0
         */
        addAction({commit, dispatch}: {commit: any, dispatch: any}) {
            setTimeout(() => {
                // 改变状态，提交mutaions
                commit(Types.INCREMENT, {
                    step: 5,
                });
                dispatch('textAction', {text: '测试'});
            }, 1000);
        },
        textAction(context: any, parames: any) {
            window.console.log(parames);
        },
    },
};
