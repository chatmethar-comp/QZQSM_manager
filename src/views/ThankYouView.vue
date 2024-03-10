<template>
  <div class="h-screen bg-primarylight">
      <div class="h-fit translate-y-1/2  thank-you-view p-8 bg-white shadow-lg max-w-sm mx-auto rounded-lg w-full relative">
        <div class=" w-full flex justify-center">
            <CheckCircleIcon class="w-20 h-20 text-green-500 " />
        </div>
        <h2 class="my-2 text-2xl font-bold text-center ">Thank you!</h2>
        <p class="text-center text-gray-500 font-light mb-3">
          Your request has been sent successfully. We will get back to you as soon as possible. In the meantime, here are some useful numbers for you
        </p>
        <ul class="list-disc list-inside text-left">
          <li>Rescue Hotline: 999</li>
          <li>Emergency Services: 112</li>
          <li>Non-emergency Helpline: 101</li>
        </ul>
      </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  props: {
    formData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    toast.success('Your wish is our command');
  },
  components: {
    CheckCircleIcon,
  },
};
</script>

<style scoped>

</style>