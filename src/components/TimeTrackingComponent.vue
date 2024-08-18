<template>
  <div class="time-tracking-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="entry1">Entrada 1:</label>
        <input type="datetime-local" v-model="entry1" id="entry1" required />
      </div>
      <div class="form-group">
        <label for="exit1">Saída 1:</label>
        <input type="datetime-local" v-model="exit1" id="exit1" required />
      </div>
      <div class="form-group">
        <label for="entry2">Entrada 2:</label>
        <input type="datetime-local" v-model="entry2" id="entry2" required />
      </div>
      <div class="form-group">
        <label for="exit2">Saída 2:</label>
        <input type="datetime-local" v-model="exit2" id="exit2" required />
      </div>
      <button type="submit" class="submit-button">Registrar Ponto</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TimeTrackingComponent',
  data() {
    return {
      entry1: '',
      exit1: '',
      entry2: '',
      exit2: ''
    };
  },
  methods: {
    submitForm() {
        alert('Ponto registrado com sucesso!');
        this.$router.push(`/app`);
    }
  }
};
</script>

<style scoped>
.time-tracking-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button.submit-button {
  padding: 10px 20px;
  background-color: #41A33E;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  max-width: 150px;
}

button.submit-button:hover {
  background-color: #36912F;
}
</style>
