<template>
 <Suspense>
  <template #default>
    <ProfileCard />
  </template>
  <template #fallback>
    <div v-for="number in numbers" :key="number">
      <LoadingCard />
      <span v-if="false">{{ number }}</span>
    </div>
  </template>
 </Suspense>
</template>

<script>
import ProfileCard from './components/ProfileCard.vue'
import LoadingCard from './components/LoadingCard.vue'
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    ProfileCard,
    LoadingCard
  },
  setup() {
    let numbers = ref([1, 2, 3, 4, 5]);
    return { numbers };
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
