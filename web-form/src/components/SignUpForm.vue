<template>
  <form action="" @submit.prevent="SubmitForm">
    <label for="email">Email:</label>
    <input type="email" id="email" required v-model="email">
    <label for="password">Password:</label>
    <input type="password" id="password" required v-model="password">
    <label for="">Role:</label>
    <select v-model="role">
      <option value="">Select your role</option>
      <option value="designer">Web Designer</option>
      <option value="developer">Web Dveloper</option>
    </select>
    <label for="skill">Skill: (end the word with ",")</label>
    <!-- if you want to trigger only when you press key alt+"," , you can use @keyup.alt -->
    <input type="text" id="skill" v-model="skill" @keyup="StoreSkills"> 
    <div class="pill" v-for="skill in skills" :key="skill">
    <span @click="RemoveSkill(skill)">{{ skill }}</span>
    </div>
    <div class="term">
      <input type="checkbox" id="checkbox" v-model="terms">
      <label for="checkbox">Accept terms and conditions.</label>
    </div>
    <div class="submit">
      <button class="button" role="button">Create Account</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      skill: "",
      skills:[]
    }
  },
  methods: {
    StoreSkills(e) {
      if (e.key === "," && this.skill) {
        if (!this.skills.includes(this.skill)) {
          this.skills.push(this.skill.replace(",", ""));
        }
        this.skill=""
      }
    },
    RemoveSkill(skill) {
      this.skills = this.skills.filter(x => x != skill);
    },
    SubmitForm() {
      console.log("hello");
    }
  }
}
</script>
<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: #fff;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input, select{ 
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.term {
  display: flex;
  align-items: center;
}

input[type="checkbox"]{
  display: inline-block;
  width: 10px;
  margin: 8px 10px 0 0;
  position: relative;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

.button {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: background 0.2s linear;
}

.button:hover {
  background: #ffff74;
}

@media (min-width: 768px) {
  .button {
    padding: 13px 50px 13px;
  }
}
.submit {
  text-align: center;
}
</style>