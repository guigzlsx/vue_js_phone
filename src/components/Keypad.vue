<template>
  <div class="keypad">
    <h2>Clavier</h2>
    <div class="dialed-number">{{ displayNumber }}</div>
    <div v-if="contactName" class="contact-name">{{ contactName }}</div>
    <div class="buttons">
      <button
        class="nb"
        v-for="number in numbers"
        :key="number"
        @click="dial(number)"
      >
        {{ number }}
      </button>
    </div>
    <button
      class="call-button"
      v-if="dialedNumber.replace(/ /g, '').length === 10"
      @click="call"
    >
      <img src="../../img/telephone.png" alt="" />
    </button>
    <div class="call-log" v-for="log in callLog" :key="log.time">
      {{ log.number }} - {{ log.time }}
    </div>
  </div>
</template>

<script>
import store from "../stores/store";
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      dialedNumber: "",
    };
  },
  created() {
    const route = useRoute();
    if (route.params.number) {
      this.dialedNumber = route.params.number;
    }
  },
  computed: {
    displayNumber() {
      return this.dialedNumber.replace(/(\d{2})(?=\d)/g, "$1 ");
    },
    contactName() {
      return store.getContact(this.dialedNumber.replace(/ /g, ""));
    },
  },
  methods: {
    dial(number) {
      if (this.dialedNumber.replace(/ /g, "").length < 10) {
        this.dialedNumber += number;
        if (this.dialedNumber.replace(/ /g, "").length % 2 === 0) {
          this.dialedNumber += " ";
        }
      }
    },
    call() {
      const now = new Date();
      store.addCallLog({
        number: this.displayNumber,
        time: now.toLocaleString(),
      });
      this.dialedNumber = "";
    },
  },
};
</script>

<style scoped>
.contact-name {
  font-size: 30px;
  color: white;
  margin-bottom: 10px;
  opacity: 0.5;
}
.dialed-number {
  text-align: center;
  color: white;
  font-size: 2em;
  margin-bottom: 20px;
}
.keypad {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 800px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.nb {
  padding: 20px;
  font-size: 20px;
  background-color: #4caf50;
  color: black;
  border: none;
  border-radius: 5px;
}

.call-button {
  display: block;
  margin: 20px auto;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
}

.call-button img {
  width: 40px;
  height: 40px;
}
</style>
