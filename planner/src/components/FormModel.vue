<template>
  <div class="backdrop">
    <div class="box">
      <form class="frm-sec">
        <div class="frm-txtbox">
          <label for="title">Title</label>
          <input type="text" id="title" v-model="title">
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
          <button @click.stop.prevent="Submit">Submit</button>
          <button @click.stop.prevent="Cancel">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["cancel", "note"],
  data() {
    return {
      title: "",
      describe: "",
      errors: [],
      output: null,
    }
  },
  methods: {
    Submit() {
      let form = document.querySelector(".frm-sec");
      if (this.CheckInput(form)) {
        console.warn("Need to check your input field again");
      } else {
        let note = {
          id: Math.random() * 1000,
          title: this.title,
          detail: this.describe,
          complete: false
        }
        fetch("http://localhost:3000/projects", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(note)
        }).then(() => this.$emit("note", note))
            .catch((err) => console.log(err.message))
      }
    }
    ,
    Cancel() {
      return this.$emit("cancel")
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
  }

}
</script>

<style lang="css" scoped>
.backdrop {
  background: rgb(0 0 0 / 61%);
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.box {
  width: 650px;
  background: #fff;
  margin: 0 auto;
  position: relative;
  top: 50%;
  border-radius: 8px;
  transform: translateY(-50%);
}

.frm-sec {
  padding: 30px 55px;
}

.frm-txtbox {
  display: block;
  text-align: left;
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