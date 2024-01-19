<template>
  <div>
    <h1>Journal d'appels</h1>
    <ul>
      <li v-for="call in callLog" :key="call.id">
        {{ call.name || call.phone }} - {{ call.time }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../stores/store";

export default {
  computed: {
    callLog() {
      return store.state.callLog;
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}

h2 {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding: 10px 0;
  width: 80%; /* Limite la largeur de la liste à 80% de la largeur du corps */
}

li {
  border-bottom: 1px solid #e9ecef;
  padding: 10px;
  margin-bottom: 10px;
  color: #545c65;
  font-weight: 600;
}

li:hover {
  color: #0ad811;
}
</style>
