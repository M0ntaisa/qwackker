export const UserModule = {
  state: {
    user: null
  },

  // mutations are functions that effect the STATE
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },

  // actions are functions that you call throughout your applications that call mutations
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },
}