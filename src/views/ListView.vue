<template>
  <div class="main-app-view">
    <ListComponent />
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';

export default {
  components: {
    ListComponent
  }
};
</script>

<style scoped>
.main-app-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e0e0e0;
}
</style>
