import { createStore } from 'vuex';

export default createStore({
  state: {
    names: [
      'Ammiel',
      'Ralph',
      'Ralph',
      'Ralph',
      'Ralph',
      'Betty',
      'Abeeku',
      'Abeeku',
      'Ralph',
      'Betty',
      'Betty',
      'Betty',
      'Edem',
      'Edem',
      'Kwabena',
      'Edem',
      'Edem',
      'Kwabena',
      'Kwabena',
      'Ammiel',
      'Ammiel',
      'Ammiel',
      'George',
      'Malcolm',
      'Malcolm',
      'Malcolm',
      'George',
      'George',
      'George',
      'Betty',
    ],
  },
  getters: {
    getNames: (state) => state.names,
  },
  mutations: {
    updateNames(state, name) {
      state.names.push(name);
    },
  },
  actions: {},
  modules: {},
});
