const createState = () => ({
  listInterest: []
})

const getters = {

}

const mutations = {
  SET_LIST(state, data) {
    state.listInterest = data
  },
}

const actions = {
  getListInterests(context, data) {
    this.$axios.get("v1/interests")
    .then((res) => {
      if (res.status == 200) {
        context.commit('SET_LIST', res.data.data.interests)
      }
    })
    .catch(err => {
      context.commit('SET_LIST', [])
    })
  },
}

const interestsModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default interestsModule