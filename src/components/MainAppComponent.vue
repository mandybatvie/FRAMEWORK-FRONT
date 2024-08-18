<template>
  <div class="main-app">
    <h2>Bem-vindo!</h2>
    <div class="content">
      <p>Menu principal</p>

      <section class="features">
        <ul>
          <li><button @click="performAction('register')">Registrar funcionário</button></li>
          <li><button @click="performAction('time')">Registrar ponto</button></li>
          <li><button @click="performAction('list')">Registrar atividade</button></li>
          <li><button @click="performAction('worker')">Lista funcionário Online</button></li>
          <li><button @click="performAction('login')">Sair</button></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainAppComponent',
  data() {
    return {
      newItem: '',
      items: [
      ]
    };
  },
  methods: {
    performAction(action) {
      this.$router.push(`/${action}`);
    }
  }
};
</script>

<style scoped>
.main-app {
  padding: 20px;
  background-color: #f9f9f9;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #41A33E;
}

h3 {
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

.features, .actions, .dynamic-content {
  margin-bottom: 20px;
}


button {
  padding: 10px 20px;
  margin-bottom: 10px;
  background-color: #41A33E;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #36912F;
}

.highlighted {
    text-decoration: line-through;
}
li{
  list-style-type: none
}
</style>
