<template>
  <div class="employee-list">
    <h2>Listagem de Funcionários</h2>
    <WorkerComponent />
  </div>
</template>

<script>
import WorkerComponent from '@/components/WorkerComponent.vue';

export default {
  components: {
    WorkerComponent
  }
};
</script>

<style scoped>
.employee-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f0f0f0;
}

h2 {
  margin-bottom: 20px;
  color: #41A33E;
}
</style>
