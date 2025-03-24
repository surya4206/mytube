<script setup>
    import {ref} from 'vue';
    import List from "@/components/container/home/List.vue";
    const items = ref([{
        id: 1,
        image: 'tom.png',
        title: 'Tom and Jerry',
        views: 1000,
        channel: 'Warner Bros',
        desc: "Tom and Jerry Latest Episode"
    },
    {
        id: 2,
        image: 'tom.png',
        title: 'Tom and Jerry',
        views: 90,
        channel: 'Warner Bros',
        desc: "Tom and Jerry Latest Episode"
    }]);

    const removeItem = (id) => {
        const index = items.value.findIndex(item => item.id === id);
        if (index !== -1) {
            items.value.splice(index, 1); // Removes 1 element at the found index
        }
    };
</script>

<template>
    <List v-for="item in items" :key="item.id" :item="item" @remove="removeItem"/>
</template>
