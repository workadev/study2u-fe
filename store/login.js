const createState = () => ({
  isLogin: false,
  user: null,
  loading: true
})

const getters = {

}

const mutations = {
  SET_LOGIN(state, data) {
    state.isLogin = data
  },
  SET_USER(state, data) {
    state.user = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  },
}

const actions = {
  getLogin(context, data) {
    context.commit('SET_LOGIN', data)
  },
  getUser(context, data) {
    context.commit('SET_USER', data)
  },
  getLoading(context, data) {
    context.commit('SET_LOADING', data)
  },
}

const loginModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default loginModule