export default {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem('admin-token') || ''
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    removeToken (state) {
      state.token = ''
      localStorage.removeItem('admin-token')
    }
  }
}
