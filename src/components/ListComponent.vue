<template>
  <div class="main-app">
    <h2>Lista de atividades</h2>
    <div class="content">
      <p>Adicione suas tarefas diárias</p>
      <section class="dynamic-content">
        <input type="text" v-model="newItem" placeholder="Adicionar novo item" />
        <button @click="addItem">Adicionar</button>
        <ul>
          <li v-for="(item, index) in items" :key="index" :class="{ line: item.line }" @click="addLine(index)">
            {{ item.text }}
          </li>
        </ul>
      </section>
      <section class="features">
        <ul>
          <li><button @click="performAction('app')">Voltar</button></li>
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
    },
    addItem() {
      if (this.newItem) {
        this.items.push({ text: this.newItem, line: false });
        this.newItem = '';
      }
    },
    addLine(index) {
      this.items[index].line = !this.items[index].line;
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

.line {
    text-decoration: line-through;
}
li{
  list-style-type: none
}
</style>
