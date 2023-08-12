<template>

  <div class="action">
    <h3 class="article-ttl" @click="isShow = !isShow">{{ project.title }}</h3>
    <div class="controls">
        <span class="material-symbols-outlined" @click="IsComplete(project.id)">
check
</span>
      <router-link :to="{ name: 'project', params:{id: project.id }}" style="color: #222222">
        <span class="material-symbols-outlined" @click="">
edit_note
</span>
      </router-link>
      <span class="material-symbols-outlined" @click="ShowDialog(project.id)">
delete
</span>
    </div>
  </div>
  <div class="d-section" v-if="isShow" >
    <p>{{ project.detail }}</p>
  </div>

</template>

<script>
export default {
  props: ["project"],
  emits: ["showdialog","complete"],
  data(){
    return{
      isShow: false
    }
  },
 methods:{
    ShowDialog(id){
      return this.$emit("showdialog",id);
    },
   IsComplete(id) {
      fetch("http://localhost:3000/projects/"+id,
          {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({complete: !this.project.complete})
          }
      )
          .then(()=>{this.$emit('complete',id)})
          .catch(err=>console.log(err.message));
   }
 }
}
</script>

<style lang="css" scoped>

:is(.article-ttl, .controls :where(span)) {
  cursor: pointer;
}

.action {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.controls {
  display: flex;
  justify-content: space-between;
  width: 100px;
}

.d-section {
  text-align: justify;
}

</style>