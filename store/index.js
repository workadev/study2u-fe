import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";
import loginModule from "~/store/login";
import studyModule from "~/store/study";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule(),
      login: loginModule(),
      study: studyModule(),
    }
  })
}

export default createStore