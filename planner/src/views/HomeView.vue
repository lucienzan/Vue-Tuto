<template>
  <div class="home">
      <div v-if="projects.length" >
          <div v-for="project in projects" :key="project.id" class="lists-sec">
            <SingleProject :project="project"/>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SingleProject from "@/components/SingleProject.vue";

export default {
  name: 'HomeView',
  components: {SingleProject},
  data(){
    return{
      projects:[]
    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
        .then(res=>res.json())
        .then(data => this.projects = data)
        .catch(err=>console.log(err));
  }

}
</script>
<style scoped>
.lists-sec {
  background: #f1f1f1;
  max-width: 650px;
  margin: 0 auto;
  padding: 14px 18px;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-left: 6px solid #E86A33;
  border-radius: 5px;
}
</style>