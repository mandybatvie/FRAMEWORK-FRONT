<template>
  <div class="time-tracking">
    <h2>Registro de Ponto</h2>
    <TimeTrackingComponent />
  </div>
</template>

<script>
import TimeTrackingComponent from '@/components/TimeTrackingComponent.vue';

export default {
  components: {
    TimeTrackingComponent
  }
};
</script>

<style scoped>
.time-tracking {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

h2 {
  margin-bottom: 20px;
  color: #41A33E;
  font-size: 2em;
  text-align: center;
}
</style>
