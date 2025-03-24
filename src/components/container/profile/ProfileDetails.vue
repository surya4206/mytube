<template>
    <div class="info">
        <p><strong>Name:</strong> {{ firstName }} {{ lastName }}</p>
        <p><strong>Mobile Number:</strong> {{ mobileNumber }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Props received from parent component
defineProps({
    firstName: String,
    lastName: String,
    mobileNumber: String,
    email: String
});
</script>

<style scoped>
.info {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid lightskyblue;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-family: monospace;
    font-size: large;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
}
</style>
