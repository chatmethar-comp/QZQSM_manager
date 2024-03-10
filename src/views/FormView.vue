<template>
  <FormComp :topic="topic"></FormComp>
</template>

<script setup>
import FormComp from '../components/FormComp.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const topic = route.query.topic;
</script>