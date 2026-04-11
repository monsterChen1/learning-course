import Vue from 'vue';
// 导入Vuex
import Vuex from 'vuex';

// 注册Vuex
Vue.use(Vuex);

import userModule from './modules/user';
// 创建Vuex实例
const store = new Vuex.Store({
    modules: {
        user: userModule
    },
    // 配置项
    // state: 存储状态数据
    state: {
        count: 99,
        price: 123
    },
    // mutations: 同步修改数据源
    mutations: {
        add(state, value) {
            state.count += value;
        },
        sub(state, value) {
            state.count -= value;
        },
        reset(state, value) {
            state.count = value;
        },
    },
    // actions: 异步修改数据源
    actions: {
        getServer(store, value) {
            setTimeout(() => {
                store.commit('reset', 1000);
                console.log(value);
            }, 1000);
        }
    },
    // getters: 计算属性
    getters: {
        totalPrice(state) {
            return state.count * state.price * 0.7;
        }
    }
});

export default store;