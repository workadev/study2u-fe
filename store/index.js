import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";
import loginModule from "~/store/login";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule(),
      login: loginModule()
    }
  })
}

export default createStore