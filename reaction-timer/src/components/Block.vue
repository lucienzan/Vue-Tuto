<template>
  <div class="block" v-if="showBlock" @click="StopTimer">click me</div>
</template>

<script>
export default {
  name: "Block",
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      time: null,
      reaction: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.StartTimer();
    }, this.delay);
  },
  methods: {
    StartTimer() {
      this.time = setInterval(() => {
        this.reaction += 10;
      }, 10);
    },
    StopTimer() {
      clearInterval(this.time);
      this.$emit("end", this.reaction);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 18px;
  background: #0faf87;
  color: #ffffff;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
