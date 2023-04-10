const app = Vue.createApp({
  data() {
    return {
      musics: [
        {
          id: parseInt(Math.random()*100),
          title: "Reputations",
          Author: "Taylor swift",
          Path: "./asset/1.png",
          IsFav: true,
        },
        {
          id: parseInt(Math.random()*100),
          title: "Thank you next",
          Author: "Ariana Grande",
          Path: "./asset/2.jpeg",
          IsFav: false,
        },
        {
          id: parseInt(Math.random()*100),
          title: "Good Riddance",
          Author: "Gracie Abrams",
          Path: "./asset/3.jpg",
          IsFav: true,
        },
        {
          id: parseInt(Math.random()*100),
          title: "Harry's House",
          Author: "Harry styles",
          Path: "./asset/4.jpeg",
          IsFav: true,
        },
        {
          id: parseInt(Math.random()*100),
          title: "Email I Can't Send",
          Author: "Sabrina Carpenter",
          Path: "./asset/5.jpg",
          IsFav: false,
        },
      ],
    };
  },
  methods: {
    //handleFav(x) {
    //  this.musics.forEach(element => {
    //    if (element.id == x) {
    //      element.IsFav = !element.IsFav;
    //    }
    //  });
    //},
    //or
    handleFav(music) {
      music.IsFav = !music.IsFav;
    }
  },
});

app.mount("#app");
