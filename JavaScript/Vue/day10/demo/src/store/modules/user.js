const userModule = {
    namespaced: true,

    state() {
        return {
            name: 'monster',
            age: 31,
            sex: 'male',
        }
    },
    mutations: {
        updateName(state, value) {
            state.name = value;
        },
        updateSex(state, value) {
            state.sex = value;
        }
    },
    actions: {
        changeSex(store, value) {
            store.commit('updateSex', value);
        }
    },
    getters: {
        fullInfo(state) {
            return `姓名:${state.name},年龄:${state.age},性别:${state.sex}`;
        }
    }
}

export default userModule;