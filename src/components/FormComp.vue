<template>
 <div class="h-screen bg-primarylight ">
   <div class="ask-for-help-form p-8 translate-y-32 bg-white shadow-lg max-w-sm mx-auto rounded-lg w-full">
     <h2 class="text-2xl font-bold ">Ask for Help</h2>
     <!-- <h2 class="text-2xl font-medium mb-6">Ask for Help {{ topic }}</h2> -->
     <form @submit.prevent="submitForm" >
       <div class="space-y-2 mb-3">
         <div class="">
           <label for="caregivers" class="block text-gray-700 font-medium">Number of caregivers</label>
           <input id="caregivers" type="number" min="0" required class="w-full border p-2 rounded-md">
         </div>
         <div class="">
           <label for="user_address" class="block text-gray-700 font-medium">Address</label>
           <input id="user_address" v-model="formData.user_address" type="text" required class="w-full border p-2 rounded-md">
         </div>
         <div class="">
           <label for="specialRequirements" class="block text-gray-700 font-medium">Special requirements</label>
           <textarea id="specialRequirements" v-model="formData.specialRequirements" rows="3" required class="w-full border p-2 rounded-md"></textarea>
         </div>
         <div class="">
           <label for="contactNumber" class="block text-gray-700 font-medium">Contact number</label>
           <input id="contactNumber" v-model.trim="formData.contactNumber" type="tel" required class="w-full border p-2 rounded-md">
         </div>
       </div>
       <button type="submit" class="block w-full bg-primary text-white p-2 rounded-md hover:bg-primarylight">Submit</button>
     </form>
   </div>
 </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import router from '../router';
export default {
 props: {
   topic: String
 },
 data() {
   return {
     formData: {
       caregivers: 0,
       resources: '',
       specialRequirements: '',
       contactNumber: '',
       user_address: '',
     }
   }
 },

 methods: {
   submitForm() {
     // You can add form validation and submission logic here
     console.log('Form submitted:', this.formData)
     router.push({ name: 'thankYou' });
   }
 }
}
</script>

<style scoped>
/* Add your Tailwind CSS styles here */
</style>