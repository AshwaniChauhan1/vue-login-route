import router from "../router";
const state = {
    login: { username: "", password: "" },
    errors: '',
    isLoggedIn: false
}

const mutations = {
    loggedIn(state) {
        state.isLoggedIn = true;
        localStorage.username = state.login.username;
        localStorage.password = state.login.password;
        localStorage.isLoggedIn = state.isLoggedIn;
        router.push('/profile')
    },
    loggedOut(state) {
        state.isLoggedIn = false;
        localStorage.username = '';
        localStorage.password = '';
        localStorage.isLoggedIn = state.isLoggedIn;
        router.push('/')
    },
    clearLogin(state) {
        state.login = { username: "", password: "" };
    }
}

const actions = {
    loggedIn({ commit }) {
        if (state.login.username == "") {
            state.errors = "* Username Required";
        } else if (state.login.password == "") {
            state.errors = "* Password Required";
        } else {
            commit('loggedIn');
        }

    },
    loggedOut({ commit }) {
        commit('clearLogin');
        commit('loggedOut');
    }

}

export default ({
    namespaced: true,
    state, mutations, actions
})