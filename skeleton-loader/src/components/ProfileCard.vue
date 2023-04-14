<template>
  <div class="main-blk" v-for="userData in users" :key="userData">
    <img :src="userData.pic" alt="userimg" class="user-img">
    <div class="user-info">
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.bio.substr(0,100)+"..." }}</p>
    </div>
  </div>
</template>
<script>
import userList from "../composable/userList"
import { ref } from 'vue';

export default {
  name: "ProfileCard",
  async setup() {
    const { loaderData } = userList();
    let users = ref(await loaderData());
   return {users}
  }
}
</script>
<style>
.main-blk{
  display: flex;
  align-items: center;
  width: 500px;
  margin: 0 auto;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
  padding: 15px 20px;
  border-radius: 14px;
  box-sizing: border-box;
  margin-bottom: 15px;
}
.user-img{
  width:100px;
  height: 100px;
  object-fit: cover;
}
.user-info {
  padding-left: 20px;
}
.user-info h3{
  text-align: left;
  margin-bottom:10px;
}
.user-info p{
  text-align: left;
  margin-top: 0px;
}
</style>