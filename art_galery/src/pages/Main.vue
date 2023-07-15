<template>
    <div class="block">
        <form class="form" @submit.prevent="searchImages">
            <input type="text" v-model="query" placeholder="Поиск">
            <button class="btn" type="submit">
                <svg class="svg" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z" fill="black"/>
                </svg>
            </button>
        </form>
    </div>  
    <div v-if="img.length">
        <div v-for="image in images" :key="image.id">
            <img :src="image.urls.small" :alt="image.alt_description" @click="$router.push(`/photo/${image.id}`)">
        </div>
    </div>
    <div v-else class="container">
        <img class="image" v-for="(image, index) in images" :key="index" :src="image.urls.small" @click="$router.push(`/photo/${image.id}`)" />
    </div>
</template>

<!-- @click="goToImagePage(image) -->

<script>
export default {
    data() {
        return {
            apiKey: "ybobZiH8a2rXL5phZj8gyu0uEnM54AdXo8aoRtsScjg",
            query: '',
            images: [],
            img: []
        };
    },
    async created() {
        const url =
            "https://api.unsplash.com/photos/random?count=9&client_id=" +
            this.apiKey;
        const response = await fetch(url);
        const data = await response.json();
        this.images = data;
    },
    methods: {
        async searchImages() {
            try {
                const response = await fetch(`https://api.unsplash.com/search/photos?query=${this.query}&client_id=${this.apiKey}&per_page=9`)
                const data = await response.json()
                this.images = data.results
            } catch (error) {
                console.log(error)
            }
        },
        async goToImagePage(image) {
            try {
                const response = await fetch(`https://api.unsplash.com/photos/${image.id}?client_id=${this.apiKey}`)
                const data = await response.json()
                window.open(data.links.html, '_blank')
            } catch (error) {
                console.log(error)
            }
        }
    },
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
    .block {
        background: url(../../src/assets/starsNight.jpeg) no-repeat;
        background-size: 100%;
        height: 253px;
        display: flex;
        justify-content: space-between;
        max-width: 100vw;
        margin: 0 auto;
    }
    .btn {
        border: none;
        align-items: right;
        margin-right: 34px;
        cursor: pointer;
    }
    .form {
        background-color: #efeeee;
        width: 866px;
        height: 70px;
        margin: auto; 
        display: flex;
        justify-content: space-between;
    }
    input {
        background-color: #efeeee;
        border: none;
        margin-left: 39px;
        margin-top: 15px;
        height: 40px;
        width: 80%;
        font-size: 24px;
        cursor: pointer;
    }
</style>