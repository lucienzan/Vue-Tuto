<template>
  <input type="text" ref="name">
  <button @click="handleClick">Add</button>
  <ul>
    <li v-for="(item, index) in items" :key="item">
    {{ index+1 }}. {{item}}
</li>
  </ul>
  <teleport to='#modal' >
    <Modal :checkModal="checkModal" @updateModal="updateModal"  >
  <template v-slot:paragraph>
      <h2>This is Modal</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, dolorum.</p>
  </template>
  </Modal>
  </teleport>
  <Button class="btnOk" @click="showModal">Show modal</Button>
</template>
<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      items:[],
      checkModal: false,
  }
  },
  methods: {
    handleClick()
    {
      let x = this.$refs.name.value;
      this.items.push(x);
      this.$refs.name.value = "";
    },
    showModal() {
      this.checkModal = true;
    },
    updateModal(x) {
      this.checkModal = x;
    }
 }
}
</script>

<style>
#app, #modal {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
