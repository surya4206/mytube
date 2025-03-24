<template>
    <div v-if="video" class="details">
        <h1>{{ video.title }}</h1>
        <img :src="`${video.image}`" alt="Video Image">
        <h3>Views: {{ video.views }}</h3>
        <h2>Channel: {{ video.channel }}</h2>
        <p>{{ video.desc }}</p>
    </div>
    <div v-else>
        <h1>Video Not Found</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Extract video details from route query
const video = computed(() => ({
    title: route.query.title || 'Unknown Title',
    views: route.query.views || '0',
    channel: route.query.channel || 'Unknown Channel',
    desc: route.query.desc || 'No Description',
    image: route.query.image || ''
}));

const getImageUrl = (image) => {
    return image ? new URL(`@/assets/${image}`, import.meta.url).href : '';
};
</script>

<style scoped>
    .details
    {
        text-align: center;
    }
    img
    {
        text-align: center;
        width: 50%;
        height: 20%;
    }
</style>
