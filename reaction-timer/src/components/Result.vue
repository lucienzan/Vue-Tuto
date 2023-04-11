<template>
  <div class="block">
    <p>Your reaction time is {{ reactionValue }} ms</p>
    <p>
      You're a <span>{{ rank }}</span>
    </p>
    <button @click="GetBack">Ok</button>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: ["reactionValue"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.reactionValue < 250) {
      this.rank = "Ninja Finger";
    } else if (this.reactionValue < 400) {
      this.rank = "Rapid Reflexes";
    } else if (this.reactionValue < 1000) {
      this.rank = "Batman";
    } else {
      this.rank = "Snail pace...";
    }
  },
  methods: {
    GetBack() {
      this.$emit("done", false);
    },
  },
};
</script>
<style>
span {
  font-weight: bold;
  color: #020304;
}
</style>
