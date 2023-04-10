const app = Vue.createApp({
  data() {
    return {
      showTitle: false,
      x: 0,
      y: 0,
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
    },
    handleEvent(e,data) {
      console.log(e);
      if (data) {
        console.log(data);
      }
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  },
});

app.mount("#app");