<template>
    <div>
        <h3>
            Wanted list
        </h3>
        <post-item 
            class="post-item"
            v-for="post in posts"
            :post="post"
            @remove="$emit('remove', post)"
        />
    </div>
</template>

<script>
export default {
    name: "post-list",
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
    h3 {
        margin-left: 20px;
    }
</style>