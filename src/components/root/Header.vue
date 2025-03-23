<script setup>
    import Button from "@/components/header/Button.vue";
    import Logo from "@/components/header/Logo.vue";
    import Search from "@/components/header/Search.vue";
    import { useRoute } from 'vue-router'
    import { computed } from 'vue'

    const route = useRoute()
    const currentPath = computed(() => route.path)
</script>
<template>
    <header>
        <Logo />
        <Search />
        <Button title="Search" link="/" />
        <Button title="Home" link="/" v-if="currentPath != '/'"/>
        <Button title="Profile" link="/profile" v-if="currentPath != '/profile'"/>
    </header>
</template>

<style scoped>
    header 
    {
    background-color: rgb(53, 53, 53);
    display: flex;
    width: 100vw;
    height: 9vh;
    align-items: center;
    justify-content: space-evenly;
    }
</style>
