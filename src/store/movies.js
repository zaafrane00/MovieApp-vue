import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const state = {
    Movies: [],
    API_key: "1ff12ca4f16a9f0d5149fe1335118d27",
    url: "https://api.themoviedb.org/"
};
const getters = {
    Movies: state => state.Movies,
    URL: state => state.url,
    API_key: state => state.API_key

};
const mutations = {
    setMovies(state, payload) {
        state.Movies = payload;
    },
};
const actions = {
    getMovies({ commit, state }) {
        let url = state.url + "3/movie/now_playing?api_key=" + state.API_key;
        return axios
            .get(url, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                console.log(response);
                commit("setMovies", response.data.results);
            }).catch((e) => {
                console.error(e);
            });
    },
};


export default {
    state,
    getters,
    mutations,
    actions
};