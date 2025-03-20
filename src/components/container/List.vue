<template>
    <a href="vuejs\dstube\index.html" class="list">
        <img :src="getImageUrl()" alt="Tom and Jerry">
        <div class="details">
            <h1>{{ title }}</h1>
            <h3>{{ views }} views</h3>
            <h2>{{ channel }}</h2>
            <h4>{{ desc }}</h4>
        </div>
    </a>
</template>

<script setup>
    const props = defineProps({
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        views: {
            type: Number,
            required: true
        },
        channel: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
    })
    function getImageUrl() {
        return new URL(`@/assets/${props.image}`, import.meta.url)
        }
</script>

<style scoped>
    img
    {
        width: 30%;
    }
    .list 
    {
        display: flex;
        flex-direction: row;
        margin: 10vh 10vw 10vh 10vw;
        border: 2px solid;
        border-color: white;
        border-radius: 10px;
        text-decoration: none;
    }
    .details 
    {
        display: flex;
        flex-direction: column;
        font-family: monospace;
        color: white;
    }
</style>