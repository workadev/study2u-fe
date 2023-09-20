const createState = () => ({
  isLogin: false,
  user: null
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
}

const actions = {
  getLogin(context, data) {
    context.commit('SET_LOGIN', data)
  },
  getUser(context, data) {
    context.commit('SET_USER', data)
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