<template>
  <form @submit.prevent="addContact">
    <label for="number">Numéro de téléphone :</label>
    <input id="number" v-model="number" maxlength="15" required />

    <label for="name">Nom du contact :</label>
    <input id="name" v-model="name" required />

    <button type="submit">Ajouter le contact</button>
  </form>
</template>

<script>
import store from "../stores/store";

export default {
  data() {
    return {
      number: "",
      name: "",
    };
  },
  watch: {
    number(newNumber) {
      this.number = newNumber.replace(/\D/g, "").slice(0, 10);
      //   this.number = this.number.replace(/(\d{2})(?=\d)/g, "$1 ");
    },
  },
  methods: {
    addContact() {
      store.addContact(this.number, this.name);
      this.number = "";
      this.name = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

label {
  margin-top: 20px;
}

input {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
