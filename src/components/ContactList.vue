<template>
  <div>
    <h2>Liste des contacts</h2>
    <ul>
      <li v-for="(name, number) in contacts" :key="number">
        {{ name }}: {{ number }}
        <button @click="call(number)">Appeler</button>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "../stores/store";
import { useRouter } from "vue-router";

export default {
  computed: {
    contacts() {
      return store.state.contacts;
    },
  },
  methods: {
    call(number) {
      const router = useRouter();
      router.push({ name: "keypad", params: { number } });
    },
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 5px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
