<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/keypad">Keypad</router-link>
        <router-link to="/call-log">Call Log</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <router-link to="/add-contact">Add Contact</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #181818;
  padding: 10px 0;
  border-bottom: 1px solid #e9ecef;
}

nav a {
  color: #545c65;
  font-weight: 600;
  text-decoration: none;
  margin: 0 15px;
}

nav a.router-link-exact-active {
  color: #4caf50;
}

nav a:hover {
  color: #0ad811;
}
</style>
