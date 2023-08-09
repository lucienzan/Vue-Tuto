<template>
  <div class="home">
      <div v-if="projects.length" >
          <div v-for="project in projects" :key="project.id" class="lists-sec" :class="{completed :project.complete}">
            <SingleProject :project="project" @showdialog="HandleDelete" @complete="HandleComplete"/>
          </div>
      </div>
    <div v-else>
      <p>There is no data available.</p>
    </div>
    <ConfirmModel v-if="isShow" @confirm="HandleConfirm" @cancel="HandleCancel"/>
  </div>
 
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import ConfirmModel from "@/components/ConfirmModel.vue";

export default {
  name: 'HomeView',
  components: {ConfirmModel, SingleProject},
  data(){
    return{
      projects:[],
      isShow: false,
      currentId:null,
    }
  },
  methods:{
    HandleConfirm(){
      this.isShow = false
        fetch("http://localhost:3000/projects/"+this.currentId, {method:'DELETE'})
            .then(() => this.$emit('delete',this.currentId))
            .catch(err => console.log(err));
      this.projects = this.projects.filter(item=>{
        return item.id !== this.currentId;
      });
    },
    HandleDelete(id){
      this.isShow = true;
      this.currentId = id;
    },
    HandleCancel(){
      this.isShow = false;
    },
    HandleComplete(id){
      let project = this.projects.find(item => 
       item.id === id
      )
      project.complete = !project.complete ;
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
  opacity: 1;
  transition: all 0.3s linear;
}
.completed {
  border-left: 6px solid #aaea9d;
  opacity: 1;
  transition: all 0.3s linear;
}
</style>