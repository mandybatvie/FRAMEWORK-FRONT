<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit" class="login-button">Login</button>
      <button type="button" class="register-button" @click="register">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'amanda' && this.password === '123') {
        this.$router.push('/app');
      } else {
        alert('Login inválido');
      }
    },
    register() {
      this.$router.push('/registerUser');
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
  margin: 5px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  width: 100px;
}

.login-button, .register-button {
  background-color: #41A33E;
}
</style>
