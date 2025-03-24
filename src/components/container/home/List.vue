<template>
    <RouterLink 
    :to="{
        path: `/video/${props.item.id}`,
        params: { id: props.item.id },
        query: {
            title: props.item.title,
            views: props.item.views,
            channel: props.item.channel,
            desc: props.item.desc,
            image: `/src/assets/${props.item.image}`
        }
    }" 
    class="list"
>
        <img :src="`/src/assets/${props.item.image}`" alt="Tom and Jerry">
        <div class="details">
            <h1>{{ props.item.title }}</h1>
            <h3>{{ props.item.views }} views</h3>
            <h2>{{ props.item.channel }}</h2>
            <h4>{{ props.item.desc }}</h4>
            <Button title="Remove" @click="remove" class="rem"/>
        </div>
    </RouterLink>
</template>

<script setup>
    import Button from '@/components/header/Button.vue';
    const props = defineProps({
        item: Object
    })
    const emit = defineEmits(['remove']);
    const remove = () => {
        emit('remove', props.item.id);
    };
</script>

<style scoped>
    .rem
    {
        width: 26%;
    }
    img
    {
        width: 30%;
    }
    .list 
    {
        display: flex;
        flex-direction: row;
        margin: 10vh 10vw 10vh 10vw;
        padding-bottom: 5vh;
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
