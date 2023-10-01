const createState = () => ({
  listMessaging: []
})

const getters = {

}

const mutations = {
  SET_LIST(state, data) {
    state.listMessaging = data
  },
  UPDATE_STATUS_LIST_ONLINE(state, data) {
    let index = state.listMessaging.findIndex(object => {
      return object.user.id == data.id;
    });
    state.listMessaging[index].user.online = data.online
  }
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