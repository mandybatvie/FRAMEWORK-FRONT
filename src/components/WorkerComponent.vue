<template>
  <div class="employee-list">
    <h2>Listagem de Funcionários</h2>
    <div class="employee-header">
      <div class="header-name">Nome</div>
      <div class="header-timer">Cronômetro</div>
      <div class="header-action">Ação</div>
    </div>
    <div v-for="(employee, index) in employees" :key="index" class="employee-row">
      <div class="employee-name">{{ employee.name }}</div>
      <div class="employee-timer">
        <span>{{ formatTime(employee.time) }}</span>
        <div class="status-indicator" :class="{ running: employee.running }"></div>
      </div>
      <button @click="toggleTimer(index)" class="timer-button">
        {{ employee.running ? 'Parar' : 'Iniciar' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeListComponent',
  data() {
    return {
      employees: [
        { name: 'Adm Ana Clara', time: 0, running: false },
        { name: 'Analista 1 Clara', time: 0, running: false },
        { name: 'Analista 3 Gustavo', time: 0, running: false },
        { name: 'Analista 4 Eloísa', time: 0, running: false },
        { name: 'Analista 5 Marcela', time: 0, running: false }
      ]
    };
  },
  methods: {
    toggleTimer(index) {
      const employee = this.employees[index];
      employee.running = !employee.running;
      if (employee.running) {
        employee.timerInterval = setInterval(() => {
          employee.time += 1;
        }, 1000);
      } else {
        clearInterval(employee.timerInterval);
      }
    },
    formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }
};
</script>

<style scoped>
.employee-list {
  width: 100%;
  max-width: 600px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #41A33E;
  margin-bottom: 20px;
}

.employee-header, .employee-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.employee-header {
  border-bottom: 2px solid #ddd;
  font-weight: bold;
}

.header-name, .header-timer, .header-action {
  flex-basis: 30%;
  text-align: center;
  padding: 0 10px;
}

.employee-name {
  flex-basis: 30%;
  text-align: left;
  padding: 0 10px;
  color: #333;
}

.employee-timer {
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: red;
}

.status-indicator.running {
  background-color: #41A33E;
}

.timer-button {
  flex-basis: 30%;
  padding: 5px 10px;
  background-color: #41A33E;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  padding: 10px;
}

.timer-button:hover {
  background-color: #36912F;
}

.employee-row:not(:last-child) {
  border-bottom: 1px solid #ddd;
}
</style>
