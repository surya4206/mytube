<script setup>
    import Button from "@/components/header/Button.vue";
    import Logo from "@/components/header/Logo.vue";
    import Search from "@/components/header/Search.vue";
</script>
<template>
    <header>
        <Logo />
        <Search />
        <Button title="Search" link="vuejs\dstube\index.html"/>
        <Button title="Home" link="vuejs\dstube\index.html"/>
        <Button title="Profile" link="vuejs\dstube\index.html"/>
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