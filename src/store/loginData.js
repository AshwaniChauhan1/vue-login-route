import router from "../router";
import axios from "axios";
const state = {
    login: { username: "eve.holt@reqres.in", password: "cityslicka" },
    errors: '',
    loading: false,
    showError: false,
    showSuccess: false
}

const mutations = {
    loggedIn() {
        localStorage.isLoggedIn = true;
        router.push('/profile');
    },
    loggedOut(state) {
        localStorage.isLoggedIn = false;
        state.login = { username: "", password: "" };
        localStorage.token = "";
        state.errors = "";
        router.push('/');
        state.showError = false;
        state.showSuccess = false;
    },
    openLogin() {
        router.push("/login");
        state.login.username = "eve.holt@reqres.in";
        state.login.password = "cityslicka";
    }
}

const actions = {
    loggedIn({ commit }) {
        if (state.login.username == "") {
            state.errors = "* Username Required";
        } else if (state.login.password == "") {
            state.errors = "* Password Required";
        } else {
            state.loading = true;
            state.errors = "";
            var payload = {
                email: state.login.username,
                password: state.login.password,
            }
            axios.post("https://reqres.in/api/login", payload).then(response => {
                if (response.status === 200) {
                    localStorage.token = response.data.token;
                    commit('loggedIn');
                    state.loading = false;
                    state.showSuccess = true;
                }
            }).catch(function (error) {
                // eslint-disable-next-line
                console.log(error, "error");
                state.errors = "* Wrong Username or Password ";
                state.loading = false;
                state.showError = true;
            });
        }

    },
    loggedOut({ commit }) {
        commit('loggedOut');
    },
    openLogin({ commit }) {
        commit('openLogin');
    },
    close() {
        state.showSuccess = false;
    }
}
export default ({
    namespaced: true,
    state, mutations, actions
})