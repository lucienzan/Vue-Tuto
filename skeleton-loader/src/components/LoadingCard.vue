<template>
  <div class="main-blk">
    <img class="user-img">
    <div class="user-info">
      <h3></h3>
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style scoped>

  .user-img {
    background: #eee;
    border-radius: 50%;
    margin: 18px 0 18px 0 ;
    animation: pulse-bg linear 1s infinite;
  }
  .user-info h3 {
    width: 200px;
    height: 15px;
    background: #eee;
    margin-bottom: 15px;
    animation: pulse-bg linear 1s infinite;
  }
  .user-info p {
    width: 300px;
    height: 15px;
    background: #eee;
    animation: pulse-bg linear 1s infinite;
  }

  @keyframes pulse-bg {
    0%{
      background: #eee;
    }50%{
      background: #eaeaea;
    }100%{
      background: #eee;
    }
  }
</style>