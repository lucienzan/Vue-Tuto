<template>
  <div class="backdrop">
      <div class="box">
        <div class="box-ttl">
          <span class="material-symbols-outlined">
error
</span>
          <h4>Are you sure to delete this?</h4>
        </div>
        <p>You will not be able to recover once you have deleted. </p>
        <div class="controls">
          <button @click="DoConfirm">OK</button>
          <button @click="DoCancel">Cancel</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  emits:['confirm','cancel'],
  methods:{
    DoConfirm(){
      return this.$emit("confirm");
    },
    DoCancel(){
      return this.$emit("cancel")
    }
  }
}
</script>

<style lang="css" scoped>
  .backdrop{
    background: rgb(0 0 0 / 61%);
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .box{
    width: 450px;
    height: 200px;
    background: #fff;
    margin: 0 auto;
    position: relative;
    top: 50%;
    border-radius: 8px;
    transform: translateY(-50%);
  }
  
  .box-ttl{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .box-ttl span{
    padding-right: 20px;
    color: #f89e35;
  }
  
  .controls{
    margin-top: 30px;
  }
  
  .controls button {
    background-color: #FFFFFF;
    border: 0;
    border-radius: .5rem;
    box-sizing: border-box;
    color: #111827;
    font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
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
    background-color: rgb(249,250,251);
  }

  .controls button:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .controls button:focus-visible {
    box-shadow: none;
  }
</style>