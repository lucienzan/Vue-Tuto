<template>
  <div>
    <form class="frm-sec" >
      <div class="frm-txtbox">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" >
        <span class="error" v-for="error in errors" :key="error.id">
            <span v-if="error.check === 'Title'">{{ error.errMsg }}</span>
          </span>
      </div>
      <div class="frm-txtbox">
        <label for="describe">Description</label>
        <textarea name="describe" id="describe" cols="63" rows="10" v-model="describe"></textarea>
        <span class="error" v-for="error in errors" :key="error.id">
            <span v-if="error.check === 'describe'">{{ error.errMsg }}</span>
          </span>
      </div>
      <div class="controls">
        <button @click.stop.prevent="Update">Update</button>
        <button @click.stop.prevent="Cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props:["id"],
  data(){
    return{
       title:"",
      describe:"",
      errors:[],
    }
  },
  methods :{
    Intialize(){
      if(this.id === "0"){
         this.$router.push({ name: "home" });
      }
      fetch("http://localhost:3000/projects/"+this.id)
          .then(res => res.json())
          .then(data =>
              {
                this.title = data.title
                this.describe = data.detail
              }
          );
    },
    Cancel(){
      this.$router.push({name: "home"});
    },
    Update(){
      let form = document.querySelector(".frm-sec");
      if (this.CheckInput(form)) {
        console.warn("Need to check your input field again");
      } else {
        let note = {
          title: this.title,
          detail: this.describe,
        }
        fetch("http://localhost:3000/projects/"+this.id, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(note)
        }).then(() => this.$router.push({name: "home"}))
            .catch((err) => console.log(err.message))
      }
    },
    CheckInput(form) {
      let id = 0;
      if (form.title.value.length === 0) {
        id++;
        this.errors = [];
        let errorExists = this.errors.some((item) => item.id === id);
        if (!errorExists) {
          this.output = {
            "id": id,
            "errMsg": "Title field required.",
            "check": "Title"
          };
          this.errors.push(this.output);
        }
        return true;

      } else if (form.title.value.length < 5) {
        id++;
        this.errors = [];
        let errorExists = this.errors.some((item) => item.id === id);
        if (!errorExists) {
          this.output = {
            "id": id,
            "errMsg": "Words length should be greater than five.",
            "check": "Title"
          };
          this.errors.push(this.output);
        }
        return true;
      }
      if (form.describe.value.length === 0) {
        id++;
        this.errors = [];
        let errorExists = this.errors.some((item) => item.id === id);
        if (!errorExists) {
          this.output = {
            "id": id,
            "errMsg": "Description field required.",
            "check": "describe"
          };
          this.errors.push(this.output);
        }
        return true;
      } else if (form.describe.value.length < 15) {
        id++;
        this.errors = [];
        let errorExists = this.errors.some((item) => item.id === id);
        if (!errorExists) {
          this.output = {
            "id": id,
            "errMsg": "Description words length should be greater than 15.",
            "check": "describe"
          };
          this.errors.push(this.output);
        }
        return true;
      }
      return false;
    }
  },
  mounted() {
    this.Intialize();
    
  }
}
</script>

<style lang="css" scoped>

.frm-sec {
  padding: 30px 55px;
  width: 35%;
  margin: 0 auto;
}

label, .error > span {
   text-align: left;
}

.frm-txtbox {
  display: block;
  margin-bottom: 15px;
}

.frm-txtbox label {
  display: block;
  margin-bottom: 8px;
}

.frm-txtbox :where(input, textarea) {
  width: 500px;
  padding: 15px;
  font-size: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: none;
  border-radius: 8px;
}

.controls {
  margin-top: 20px;
}

.controls button {
  background-color: #FFFFFF;
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  margin-left: 20px;
}

.controls button:hover {
  background-color: rgb(249, 250, 251);
}

.controls button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.controls button:focus-visible {
  box-shadow: none;
}

.error span {
  margin-top: 8px;
  display: block;
  color: #ff6464;
}

</style>