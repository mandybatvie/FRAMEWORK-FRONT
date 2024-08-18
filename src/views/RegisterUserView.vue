<template>
  <div class="register">
    <h2>Registrar Funcionário</h2>
    <RegisterComponent />
  </div>
</template>

<script>
import RegisterComponent from '@/components/RegisterUserComponent.vue';

export default {
  components: {
    RegisterComponent
  }
};
</script>

<style scoped>
.register {
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
}
</style>
