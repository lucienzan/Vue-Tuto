const app = Vue.createApp({
  data() {
    return {
      showTitle: false,
      btnTitle: "Show title",
      title: "I slam the door",
      author: "Lucien",
      age: 22
    }
  },
  methods: {
    changeTitle(title) {
      //this.title = "hello, this is changed title";
      this.title = title;
    },
    toggle() {
      this.showTitle = !this.showTitle;
      if (this.showTitle) {
        this.btnTitle = "Close title";
      } else {
        this.btnTitle = "Show title";
      }
    }
  },
});

app.mount("#app");