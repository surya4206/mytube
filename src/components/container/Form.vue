<template>
    <div class="profile">
        <form @submit:prevent="change">
            <input type="text" name="firstName" placeholder="First Name" autofocus><br>
            <input type="text" ref="lastName" placeholder="Last Name"><br>
            <input type="number" ref="mobileNumber" placeholder="Mobile Number" pattern="[0-9]{10}"><br>
            <input type="email" ref="email" placeholder="Email"><br>
            <input type="button" value="Update" id="form-submit">
        </form>
    </div>
    <div class="info" v-if="submitted">
        <p>Name: {{ firstName }} {{ lastName }}</p>
        <p>Mobile Number: {{ mobileNumber }}</p>
        <p>Email: {{ email }}</p>
    </div>
</template>

<script setup>
    import {ref} from 'vue';

    var firstName = ref('Surya');
    var lastName = ref('Bhat');
    var mobileNumber = ref(9148776970);
    var email = ref('suryabhat.20037@gmail.com');
    var submitted = ref(false);

    const change = () => {
        // Manually capture values from the form inputs and update the reactive variables
        firstName.value = firstName.value;
        lastName.value = lastName.value;
        mobileNumber.value = mobileNumber.value;
        email.value = email.value;

        // Mark the form as submitted
        submitted.value = true;
    };

</script>

<style scoped>
    input
    {
        width: 40vw;
        padding: 1.5vh;
        border: 2px solid;
        border-radius: 5px;
        border-color: gray;
        background-color: black;
        color: white;
        font-family: monospace;
        font-weight: 600;
        margin: 1vh 5vw 1vh 0vw;
    }
    .profile
    {
        margin: 5vh 20vh 5vh 15vw;
        text-align: center;
    }
    #form-submit
    {
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
    }
    #form-submit:hover
    {
        background-color: lightskyblue;
        color: white;
        transition: ease-in;
        transition-duration: 0.25s;
    }
</style>