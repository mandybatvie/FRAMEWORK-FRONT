<template>
  <div class="register-form">
    <form @submit.prevent="register">
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Nome" required />
      </div>
      <div class="form-group">
        <input type="text" v-model="cpf" placeholder="CPF" required />
      </div>
      <div class="form-group">
        <input type="email" v-model="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Senha" required />
      </div>
      <div class="form-group">
        <select v-model="userType" required>
          <option disabled value="">Tipo de Cadastro</option>
          <option value="adm">Adm</option>
          <option value="grupo1">Grupo 1</option>
          <option value="grupo2">Grupo 2</option>
          <option value="grupo3">Grupo 3</option>
        </select>
      </div>
      <button type="submit" class="submit-button">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      name: '',
      cpf: '',
      email: '',
      password: '',
      userType: ''
    };
  },
  methods: {
    register() {
      this.$router.push('/app');
    }
  }
};
</script>

<style scoped>
.register-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
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
