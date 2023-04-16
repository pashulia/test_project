<template>
    
    <button @click="fetchPosts">Update wanted list</button>
    <div>
        Hi hunter: {{ $store.state.user }}
    </div>
    <div v-if=" $store.state.user === '' ">
        <h3>Login first!</h3>
        <login-form @create="login"/>
    </div>
    <post-list 
        class="post_list"
        v-else
        :posts="posts"
        @remove="deletePost"
    />
</template>

<script>
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';

export default {
    mounted() {
        this.fetchPosts()
    },
    methods: {
        ...mapActions({
            fetchPosts: 'fetchPosts'
        }),
        ...mapMutations({
            deletePost: 'deletePost'
        }),
        deletePosts(id) {
            this.deletePost(id)
        }
    },
    computed: {
        ...mapState({
            posts: state => state.posts
        })
    }
}
</script>

<style>
    
</style>
