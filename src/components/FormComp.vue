<template>
  <div class="h-screen bg-primarylight ">
    <div class="absolute z-50 w-full text-center top-16 font-bold text-4xl text-opacity-40 text-primary">ミ知らせ</div>

    <div class="ask-for-help-form p-8 translate-y-32 bg-white shadow-lg max-w-sm mx-auto rounded-lg w-full">
      <h2 class="text-2xl font-bold ">Ask for Help</h2>
      <!-- <h2 class="text-2xl font-medium mb-6">Ask for Help {{ topic }}</h2> -->
      <form @submit.prevent="submitForm" >
        <div class="space-y-2 mb-3">
          <div class="">
            <label for="caregivers" class="block text-gray-700 font-medium">Number of caregivers</label>
            <input id="caregivers" type="number" min="0" required class="w-full border p-2 rounded-md">
          </div>
          <!-- <div class="">
            <div class="flex flex-col space-y-1">
              <div class="flex items-center">
                <input id="elder" type="checkbox" value="elder" class="form-checkbox mr-2 w-4 h-4 border-gray-300">
                <label for="elder" class="block text-sm">Elder</label>
              </div>
              <div class="flex items-center">
                <input id="smallChild" type="checkbox" value="smallChild" class="form-checkbox mr-2 w-4 h-4 border-gray-300">
                <label for="smallChild" class="block text-sm">Small child</label>
              </div>
              <div class="flex items-center">
                <input id="disability" type="checkbox" value="disability" class="form-checkbox mr-2 w-4 h-4 border-gray-300">
                <label for="disability" class="block text-sm">Disability</label>
              </div>
            </div>
          </div> -->
          <label for="peopleUnderCare" class="block text-gray-700 font-medium">People under care</label>
          <div class="flex items-center">
            <label class="relative flex items-center p-1 mr-1 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                id="check" />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
              Elder
            </label>
          </div> 
          <div class="flex items-center">
            <label class="relative flex items-center p-1 mr-1 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                id="check" />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
              Disablity
            </label>
          </div> 
          <div class="flex items-center">
            <label class="relative flex items-center p-1 mr-1 rounded-full cursor-pointer" htmlFor="check">
              <input type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10"
                id="check" />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                  stroke="currentColor" stroke-width="1">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="check">
              Kid
            </label>
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
        peopleUnderCare: []
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