<template>
    <div class="container">
        <img class="image" v-for="(image, index) in images" :key="index" :src="image.urls.small" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            apiKey: "EVrA2SgprFyjEdVF51v2bm0LSf7ERPyUll7yFXk8ryk",
            images: []
        };
    },
    async created() {
        const url =
            "https://api.unsplash.com/photos/random?count=9&client_id=" +
            this.apiKey;
        const response = await fetch(url);
        const data = await response.json();
        this.images = data;
    }
};
</script>

<style scoped>
    div {
        display: flex;
        flex-wrap: wrap;
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
    }
    .image {
        margin: 27px;
        float:left;
        overflow:hidden;
        position:relative;
        width:473px;
        height:473px;
        border-radius: 8px;
    }
</style>