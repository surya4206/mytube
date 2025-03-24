<template>
    <div class="profile">
        <form @submit.prevent="submitForm">
            <input type="text" v-model="firstName" placeholder="First Name" autofocus><br>
            <input type="text" v-model="lastName" placeholder="Last Name"><br>
            <input type="number" v-model="mobileNumber" placeholder="Mobile Number"><br>
            <input type="email" v-model="email" placeholder="Email"><br>
            <button type="submit" id="form-submit">Update</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

// Emit event to send data to parent component
const emit = defineEmits(['update-profile']);

// Form state
const firstName = ref('');
const lastName = ref('');
const mobileNumber = ref('');
const email = ref('');

const submitForm = () => {
    emit('update-profile', {
        firstName: firstName.value,
        lastName: lastName.value,
        mobileNumber: mobileNumber.value,
        email: email.value
    });
};
</script>

<style scoped>
input {
    width: 40vw;
    padding: 1.5vh;
    border: 2px solid gray;
    border-radius: 5px;
    background-color: black;
    color: white;
    font-family: monospace;
    font-weight: 600;
    margin: 1vh 5vw 1vh 0vw;
}
.profile {
    margin: 5vh 20vh 5vh 15vw;
    text-align: center;
}
#form-submit {
        border-style:double;
        border-color: lightskyblue;
        border-radius: 5px;
        border-width: 2px;
        text-decoration: none;
        color: lightskyblue;
        font-size: large;
        font-family: monospace;
        padding: 8px 10px 8px 10px;
        width: 12vw;
        background-color: black;
        margin-left: -5vw;
        margin-top: 5vh;
}
#form-submit:hover {
    background-color: lightskyblue;
    color: white;
    transition: ease-in 0.25s;
}
</style>
