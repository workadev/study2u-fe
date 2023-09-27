const createState = () => ({
  listStudy: []
})

const getters = {

}

const mutations = {
  SET_LIST_STUDY(state, data) {
    state.listStudy = data
  },
}

const actions = {
  async getStudy(context, data) {
    await this.$axios.get("v1/study_levels", { params: data })
    .then((res) => {
      if (res.status == 200) {
        context.commit('SET_LIST_STUDY', res.data.data.study_levels)
      }
    })
  },
}

const studyModule = () => ({
  namespaced: true,
  state: createState(),
  getters,
  mutations,
  actions
})

export default studyModule