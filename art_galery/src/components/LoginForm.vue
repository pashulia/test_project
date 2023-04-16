<template>
    <div>
        <h3>
            Login
        </h3>
        <form @submit.prevent>
            <input 
                type="text" 
                v-focus
                v-model="user.name"
                placeholder="Your nickname"
            />
            <button @click="$store.commit('newName', this.user.name)">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "login-form",
    data() {
        return{
            user: {
                name: "",
            }
        }
    },
    methods: {
        create() {
            this.$emit("create", this.user);
            $store.commit('newName', this.user)
            this.user = {
                name: "",
            }
        },
    }
}
</script>

<style scoped>
    div {
        padding: 10px;
        width: 280px;
    }
    button {
        margin-left: 10px;
        background-color: rgb(12, 193, 69);
        border-radius: 5px;
    }
    input {
        border-radius: 5px;
    }
</style>
