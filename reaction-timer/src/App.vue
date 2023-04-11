<template>
<h2>Moon Reaction Timer</h2>
<button @click="Play" :disabled="isPlay">Play</button>
<Block v-if="isPlay" :delay="delay" @end="GetResult"/>
<Result v-if="showResult" :reactionValue="score" @done="GetBack"/>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data() {
    return {
      delay: 0,
      isPlay: false,
      score: null,
      showResult: false,
    }
  },
  methods: {
    Play() {
      this.delay = 2000 + Math.random()*5000;
      this.isPlay = true;
      this.showResult = false
    },
    GetResult(reactionValue) {
      this.score = reactionValue;
      this.isPlay = false;
      this.showResult = true
    },
    GetBack(isBack) {
      this.showResult = isBack;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
/* CSS */
button {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100px;
  z-index: 9;
  border: 0;
}

button:hover {
  background: #00bd68;
}

button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
