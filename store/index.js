import Vuex from 'vuex'
import snackbarModule from "~/store/snackbar";
import loginModule from "~/store/login";
import studyModule from "~/store/study";
import configModule from "~/store/config";
import interestsModule from "~/store/interests";
import institutionsModule from "~/store/institutions";
import conversationModule from "~/store/conversation";
import websocketModule from "~/store/websocket";
import messagingModule from "~/store/messaging";

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      snackbar: snackbarModule(),
      login: loginModule(),
      study: studyModule(),
      config: configModule(),
      interests: interestsModule(),
      institutions: institutionsModule(),
      conversation: conversationModule(),
      websocket: websocketModule(),
      messaging: messagingModule(),
    }
  })
}

export default createStore