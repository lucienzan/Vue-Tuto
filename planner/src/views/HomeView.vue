<template>
  <div class="home">
    <div class="control-sec">
      <!-- $event is that came from emit value, set emit value to SortProject variable  -->
      <FilterBox @sortBy="SortProject = $event" :current="SortProject"/>
      <button class="toCreate" @click="ToCreate">Create</button>
    </div>
    <div v-if="projects.length" >
          <div v-for="project in filterProjects" :key="project.id" class="lists-sec" :class="{completed :project.complete}">
            <SingleProject :project="project" @showdialog="HandleDelete" @complete="HandleComplete"/>
          </div>
      </div>
    <div v-else>
      <p>There is no data available.</p>
    </div>
    <ConfirmModel v-if="isShow" @confirm="HandleConfirm" @cancel="HandleCancel"/>
    <FormModel v-if="isFrmShow" @cancel="HandleCancel" @note="AddNote"/>
  </div>
 
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import ConfirmModel from "@/components/ConfirmModel.vue";
import FormModel from "@/components/FormModel.vue";
import EditProject from "@/views/EditProject.vue";
import FilterBox from "@/components/FilterBox.vue";

export default {
  name: 'HomeView',
  components: {FilterBox, EditProject, FormModel, ConfirmModel, SingleProject},
  data() {
    return {
      projects: [],
      isShow: false,
      isFrmShow: false,
      currentId: null,
      SortProject: "all"
    }
  },
  methods: {
    HandleConfirm() {
      this.isShow = false
      fetch("http://localhost:3000/projects/" + this.currentId, {method: 'DELETE'})
          .then(() => this.$emit('delete', this.currentId))
          .catch(err => console.log(err));
      this.projects = this.projects.filter(item => {
        return item.id !== this.currentId;
      });
    },
    HandleDelete(id) {
      this.isShow = true;
      this.currentId = id;
    },
    HandleCancel() {
      this.isShow = false;
      this.isFrmShow = false;
    },
    HandleComplete(id) {
      let project = this.projects.find(item =>
          item.id === id
      )
      project.complete = !project.complete;
    },
    ToCreate() {
      this.isFrmShow = true;
    },
    AddNote(note) {
      this.projects.push(note);
      this.isFrmShow = false;
    },

  },
  mounted() {
    fetch("http://localhost:3000/projects")
        .then(res => res.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err));
  },
  computed: {
    filterProjects() {
      if (this.SortProject === "completed") {
        return this.projects.filter(project => 
           project.complete
        )
      }else if(this.SortProject === "unCompleted"){
        return this.projects.filter(project =>
            !project.complete
        )
      }
      return this.projects;
    }

  }
}
</script>
<style scoped>
.control-sec {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}
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
.toCreate {
   background-color: #222;
   border-radius: 4px;
   border-style: none;
   box-sizing: border-box;
   color: #fff;
   cursor: pointer;
   display: inline-block;
   font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
   font-size: 16px;
   font-weight: 700;
   line-height: 1.5;
   max-width: none;
   min-height: 44px;
   min-width: 10px;
   outline: none;
   overflow: hidden;
   padding: 9px 20px 8px;
   position: relative;
   text-align: center;
   text-transform: none;
   user-select: none;
   -webkit-user-select: none;
   touch-action: manipulation;
   width: 150px;
  margin-bottom: 20px;
 }

.toCreate:hover,
.toCreate:focus {
  opacity: .75;
}
</style>