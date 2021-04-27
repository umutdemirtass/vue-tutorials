import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    userName : 'Umut',
    message : 'Merhaba',
};

const getters = {
    welcomeMessage(state){
        return `${state.message} ${state.userName}`;
    }
};

const mutations = {
    setUserName(state,name){
        return state.userName = name;
    },
};

const actions = {
    updateUserName({commit},name){
        commit('setUserName',name);
    },
   
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;