<template>
    <div class="profile-page">
        <ProfileForm @update-profile="updateProfile" />
        <ProfileDetails v-if="submitted" :firstName="displayFirstName" :lastName="displayLastName" :mobileNumber="displayMobileNumber" :email="displayEmail" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProfileForm from '@/components/container/profile/ProfileForm.vue';
import ProfileDetails from '@/components/container/profile/ProfileDetails.vue';

// Reactive state for submitted data
const displayFirstName = ref('');
const displayLastName = ref('');
const displayMobileNumber = ref('');
const displayEmail = ref('');
const submitted = ref(false);

const updateProfile = (profile) => {
    // Update displayed values after form submission
    displayFirstName.value = profile.firstName;
    displayLastName.value = profile.lastName;
    displayMobileNumber.value = profile.mobileNumber;
    displayEmail.value = profile.email;
    submitted.value = true;
};
</script>

<style scoped>
    .profile-page {
        text-align: justify;
    }
</style>
