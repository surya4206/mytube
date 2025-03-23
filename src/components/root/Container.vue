<script setup>
    import HomeView from "@/components/container/HomeView.vue";
    import ProfileView from "@/components/container/ProfileView.vue";
    import VideoView from "@/components/container/VideoView.vue";
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()
    const currentPath = computed(() => route.path)
</script>

<template>
    <div class="container">
    </div>
    <VideoView v-if="currentPath != '/' && currentPath != '/profile'"/>
    <HomeView v-if="currentPath === '/'"/>
    <ProfileView v-if="currentPath === '/profile'"/>
</template>

<style scoped>
    .container
    {
    margin: 2vh;
    }
</style>
