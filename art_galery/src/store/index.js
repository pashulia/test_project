import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
    state: {
        posts: [],
        post: {},
        user: '',
        id: 0,
    },
    getters: {

    },
    mutations: {
        newName(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = ' '
        },
        setPosts(state, newPosts) {
            state.posts = newPosts,
            state.id = state.posts.length
        },
        deletePost(state, post) {
            state.posts = state.posts.filter(p => p.uid !== post.uid);
        },
        getPost(state, uid) {
            state.post = state.posts.find(p => p.uid === uid);
        }
    },
    actions: {
        async fetchPosts({ commit }) {
            const responce = await axios.get("https://api.fbi.gov/wanted/v1/list");
            console.log(responce.data);
            commit('setPosts', responce.data.items.filter(p => p.reward_text !== null));
        },
    }
})