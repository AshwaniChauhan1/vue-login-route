import router from "../router";
const state = {
    login: { username: "", password: "" },
    errors: '',
}

const mutations = {
    loggedIn(state) {
        localStorage.username = state.login.username;
        localStorage.password = state.login.password;
        localStorage.isLoggedIn = true;
        router.push('/profile')
    },
    loggedOut(state) {
        localStorage.username = '';
        localStorage.password = '';
        localStorage.isLoggedIn = false;
        state.login = { username: "", password: "" };
        router.push('/')
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
        commit('loggedOut');
    }

}

export default ({
    namespaced: true,
    state, mutations, actions
})