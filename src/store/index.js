import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        isLogged:false
    },
    mutations:{
        setAuth(state, auth){
           state.isLogged=auth
           
        }
    },
    actions:{
        setAuth({commit},auth){
            commit('setAuth', auth)
        }
    }

})