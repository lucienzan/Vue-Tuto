<template>
  <div class="dropdown">
    <button class="dropbtn">Filter</button>
    <div class="dropdown-content">
      <a href="#" :class="{ active: current === 'all'}" @click.stop.prevent="FilterBy('all')">All</a>
      <a href="#" :class="{ active: current === 'completed'}" @click.stop.prevent="FilterBy('completed')">Completed</a>
      <a href="#" :class="{ active: current === 'unCompleted'}" @click.stop.prevent="FilterBy('unCompleted')">UnComplete</a>
    </div>
  </div>
</template>

<script>
export default {
  emits:["sortBy"],
  props:["current"],
  methods:{
    FilterBy(item){
      this.$emit("sortBy",item);
    }
  },
}
</script>

<style scoped>
/* Style The Dropdown Button */
.dropbtn {
  background-color: #F8F0E5;
  color: #222222;
  font-weight: bold;
  padding: 9px 20px 8px;
  min-height: 44px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: left;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #EADBC8;
}

.active{
  color: #102C57;
  font-weight: bold;
}
</style>