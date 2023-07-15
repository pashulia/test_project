<template>
    <div>
      <h1>Избраное</h1>
      <div v-if="photos.length" v-for="photo in photos" :key="photo.id">
        <img :src="photo.urls.regular" alt="Unsplash photo" />
      </div>
      <div v-else>
        <h4>здесь пока ничего нет</h4>
      </div>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
    data() {
      return {
        photos: []
      };
    },
    mounted() {
      const unsplashAccessKey = 'ybobZiH8a2rXL5phZj8gyu0uEnM54AdXo8aoRtsScjg';
      const username = '@pashulia';
  
      axios
        .get(`https://api.unsplash.com/users/${username}/likes`, {
          headers: {
            Authorization: `Client-ID ${unsplashAccessKey}`
          }
        })
        .then(response => {
          this.photos = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  
</script>
  