import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  clock: null,
  seconds: 0,
  showMenu: false,
  tasks: [
    {
      name: "work",
      seconds: 30,
      up: false
    },
    {
      name: "rest",
      seconds: 5,
      up: true
    }
    // {
    //   name: "foo",
    //   seconds: 10,
    //   up: false
    // },
    // {
    //   name: "baz",
    //   seconds: 100,
    //   up: true
    // },
    // {
    //   name: "ziz",
    //   seconds: 100,
    //   up: false
    // }
  ]
};

const mutations = {
  NEXT(state) {
    state.tasks.push(state.tasks.shift());
  },
  SET(state, payload) {
    state.clock = payload;
  },
  RESET(state) {
    state.seconds = Math.floor((1675598400000 - Date.now()) / 1000);
  },
  TICK(state) {
    state.seconds -= 1;
  },
  SHOWMENU(state) {
    state.showMenu = !state.showMenu;
  },
  ADDTASK(state, payload) {
    state.tasks.push(payload);
  },
  REMOVETASK(state, payload) {
    state.tasks.splice(payload, 1);
  }
};

const actions = {
  showMenu(context) {
    context.commit("SHOWMENU");
  },
  removeTask(context, payload) {
    context.commit("REMOVETASK", payload);
  },
  addTask(context, payload) {
    context.commit("ADDTASK", payload);
  },
  reset(context) {
    let clock = setInterval(function () {
      context.commit("TICK");
    }, 1000);
    context.commit("RESET", clock);
  }
};

const getters = {
  showMenu(state) {
    return state.showMenu;
  },
  getTask(state) {
    return state.tasks[0];
  },
  getTasks(state) {
    return state.tasks;
  },
  getClock(state) {
    return state.clock;
  },
  getSeconds(state) {
    return state.seconds;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
