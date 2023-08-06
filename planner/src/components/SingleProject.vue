<template>

  <div class="action">
    <h3 class="article-ttl" @click="isShow = !isShow">{{ project.title }}</h3>
    <div class="controls">
        <span class="material-symbols-outlined">
check
</span>
      <span class="material-symbols-outlined">
edit_note
</span>
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
  emits: ["showdialog"],
  data(){
    return{
      isShow: false
    }
  },
 methods:{
    ShowDialog(id){
      return this.$emit("showdialog",id);
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