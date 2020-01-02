import router from "../main";
const state = {
    login: {username:"",password:""},
    errors:'',
    isLoggedIn:false
}

const mutations = {
    loggedIn(state){
        state.isLoggedIn=true;
        //eslint-disable-next-line
        console.log(state.isLoggedIn);
    },
    loggedOut(state){
        state.isLoggedIn=false;
        //eslint-disable-next-line
        console.log(state.isLoggedIn);
    }
}

const actions= {
    loggedIn({commit}){
        if (state.login.username == "") {
            state.errors = "* Username Required";
          } else if (state.login.password == "") {
            state.errors = "* Password Required";
          } else {
              //eslint-disable-next-line
              console.log(router);
              
                this.$router.push('/profile');
              
            commit('loggedIn');
          }
        
    },
    loggedOut({commit}){
        commit('loggedOut')
    }

}

export default ({
    namespaced: true,
    state,mutations,actions
})