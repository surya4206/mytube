<template>
    <RouterLink :to="link">{{ title }}</RouterLink>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false,
            default: '/'
        }
    });
</script>

<style scoped >
    a 
    {
        margin: 0;
        border-style:double;
        border-color: lightskyblue;
        border-radius: 5px;
        border-width: 2px;
        text-decoration: none;
        color: lightskyblue;
        font-size: large;
        font-family: monospace;
        padding: 8px 15px 8px 15px;
    }

    a:hover
    {
        background-color: lightskyblue;
        color: white;
        transition: ease-in;
        transition-duration: 0.25s;
    }
</style>
