<template>
  <div class="h-screen bg-primarylight">
    <div class="absolute z-50 w-full text-center top-16 font-bold text-4xl text-opacity-40 text-primary">ミ知らせ</div>
    <div class="w-full max-w-sm translate-y-1/2 mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div class="heading mb-2">
          <h2 class="text-2xl font-bold">
            Ask for Help
          </h2>
          <p class="">choose following topics</p>
      </div>
      <form @submit.prevent="submitForm">
        <div class="space-y-2 mb-4 ">
    
          <label :class="{ 'bg-primary shadow-sm text-white': formData.topic === 'resources', 'bg-light text-dark': formData.topic !== 'resources' }" class="block w-full duration-200 p-3 rounded-md cursor-pointer" @click="toggleTopic('resources')">
            <input type="radio" v-model="formData.topic" value="resources" class="hidden">
            <i class="fas fa-shirt w-6"></i> Resources
          </label>
          <label :class="{ 'bg-primary shadow-sm text-white': formData.topic === 'supplies', 'bg-light text-dark': formData.topic !== 'supplies' }" class="block w-full duration-200 p-3 rounded-md cursor-pointer" @click="toggleTopic('supplies')">
            <input type="radio" v-model="formData.topic" value="supplies" class="hidden">
            <i class="fas fa-pizza-slice w-6"></i>Supplies
          </label>
          <label :class="{ 'bg-primary shadow-sm text-white': formData.topic === 'communication', 'bg-light text-dark': formData.topic !== 'communication' }" class="block w-full duration-200 p-3 rounded-md cursor-pointer" @click="toggleTopic('communication')">
            <input type="radio" v-model="formData.topic" value="communication" class="hidden">
            <i class="fas fa-message w-6"></i>Communication
          </label>
          <label :class="{ 'bg-primary shadow-sm text-white': formData.topic === 'tools', 'bg-light text-dark': formData.topic !== 'tools' }" class="block w-full duration-200 p-3 rounded-md cursor-pointer" @click="toggleTopic('tools')">
            <input type="radio" v-model="formData.topic" value="tools" class="hidden">
            <i class="fas fa-compass w-6"></i>Tools
          </label>
        </div>
    
        <div class="flex w-full items-center justify-center">
          <button type="submit" :disabled="formData.topic===''" :class="{ 'bg-gray-300' : formData.topic==='', 'bg-primary' : formData.topic!==''}" class=" primary-button hover:bg-primarylight checked:bg-dark py-2 px-4 text-white rounded" @click="nextPage">NEXT</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        topic: '',
      }
    }
  },
  methods: {
    toggleTopic(topic) {
      this.formData.topic = topic;
    },
    submitForm() {
      console.log('Form submitted:', this.formData.topic)
    },
    nextPage() {
      if (this.formData.topic !== '') {
        this.$router.push({ name: 'form', query: { topic: this.formData.topic } });
      }
    }
  }
}
</script>

<style scoped>

.bg-primarylight:checked {
  @apply bg-primary;
}
</style>