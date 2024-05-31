<template>
  <div class="container">
    <div v-if="!codeEntered">
      <div class="keypad">
        <button @click="pressKey('Up', $event)" :class="{ 'clicked': clickedButton === 'Up' }" class="up">↑</button>
        <button @click="pressKey('Down', $event)" :class="{ 'clicked': clickedButton === 'Down' }" class="down">↓</button>
        <button @click="pressKey('Left', $event)" :class="{ 'clicked': clickedButton === 'Left' }" class="left">←</button>
        <button @click="pressKey('Right', $event)" :class="{ 'clicked': clickedButton === 'Right' }" class="right">→</button>
        <button @click="pressKey('A', $event)" :class="{ 'clicked': clickedButton === 'A' }" class="a">A</button>
        <button @click="pressKey('B', $event)" :class="{ 'clicked': clickedButton === 'B' }" class="b">B</button>
      </div>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <div v-else>
      <p style="color:#fff">Code successfully entered...</p>
      <p style="color:#fff">However, I'm still setting up. Come back after another update or so.</p>
      <p style="color:#fff; font-family: 'Hot Mustard BTN Regular'">- Unknown</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      konamiCode: ['Up', 'Up', 'Down', 'Down', 'Left', 'Right', 'Left', 'Right', 'B', 'A'],
      inputSequence: [],
      errorMessage: '',
      codeEntered: false,
      clickedButton: ''
    };
  },
  methods: {
    pressKey(key, event) {
      this.clickedButton = key;
      setTimeout(() => {
        this.clickedButton = '';
      }, 200);
      this.inputSequence.push(key);
      if (this.inputSequence.length > this.konamiCode.length) {
        this.inputSequence.shift();
      }
      if (this.inputSequence.toString() === this.konamiCode.toString()) {
        this.codeEntered = true;
      } else if (!this.konamiCode.slice(0, this.inputSequence.length).every((v, i) => v === this.inputSequence[i])) {
        this.inputSequence = [];
        this.errorMessage = '';
      } else {
        this.errorMessage = '';
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.keypad {
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  gap: 10px;
}
button {
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border: 2px solid #999;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}
button.up {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  background-size: cover;
}
button.down {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  background-size: cover;
}
button.left {
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  background-size: cover;
}
button.right {
  grid-column: 3 / span 1;
  grid-row: 2 / span 1;
  background-size: cover;
}
button.a, button.b {
  background-color: #eee;
}
button.clicked {
  background-color: #ff0;
  border-color: #f00;
}
p {
  color: red;
  margin-top: 20px;
}
</style>