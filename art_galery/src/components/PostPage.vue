<template>
    <div>
        <p>
            <strong>Title:</strong> {{ post.title }}
        </p>
        <p>
            <strong>Reward:</strong> {{ post.reward_text }}
        </p>
        <p>
            <strong>Description:</strong> {{ post.description }}
        </p>
        <p>
            <strong>Details:</strong> {{ post.details }}
        </p>
        
    </div>
</template>

<script>
export default {
    name: "post-page",
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    div {
        margin: 20px;
        border: 1px solid red;
        border-radius: 10px;
        padding: 10px;
        width: 1200px;
        background-color: #87ed77;
        color: #050505;
    }
    button {
        border: 1px solid red;
        border-radius: 5px;
        background-color: #f64242;
        color: #fbfafa;
    }
</style>