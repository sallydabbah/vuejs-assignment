import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(axios);

export const store = new Vuex.Store({
    state: {
        posts: [],
        comments: [],
        selectedPostComments:[]
    },
    actions: {
        loadPosts(context, api) {
            axios
                .get(api)
                .then(data => {
                    //        console.log(data.data);   
                    context.commit('setPosts', data.data);
                })
                .catch(error => {
                    console.log('error in loadposts' + error);
                });
        },
        loadComments(context, api) {
            axios
                .get(api)
                .then(data => {
                    //        console.log(data.data);   
                    context.commit('setComments', data.data);
                })
                .catch(error => {
                    console.log('error in loadposts' + error);
                });
        },
        loadPostComments(context, api) {
            axios
                .get(api)
                .then(data => {   
                    context.commit('setPostComments', data.data);
                })
                .catch(error => {
                    console.log('error in loadposts' + error);
                });
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setComments(state,comments){
            state.comments=comments;
        },
        setPostComments(state,comments){
            state.selectedPostComments=comments;
        }
    }
});
