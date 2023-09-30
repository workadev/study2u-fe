const createState = () => ({
  listMessaging: []
})

const getters = {

}

const mutations = {
  SET_LIST(state, data) {
    state.listMessaging = data
  },
}

const actions = {
  getListMessaging(context, data) {
    context.commit('SET_LIST', data)
  },
}

const messagingModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default messagingModule