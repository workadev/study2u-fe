const createState = () => ({
  isLogin: false
})

const getters = {

}

const mutations = {
  SET_LOGIN(state, data) {
    state.isLogin = data
  },
}

const actions = {
  getLogin(context, data) {
    context.commit('SET_LOGIN', data)
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