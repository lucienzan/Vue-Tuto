<template>
  <div class="modal-wrapper" v-if="checkModal" @click.self="BtnOk" >
      <div class="modal">
        <slot name="paragraph">
          <h2>This is default slot</h2>
        </slot>
        <div class="ctrl-wrapper">
          <button class="btnOk" @click="BtnOk">Ok</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    checkModal : Boolean
  },
  data() {
    return {
  }
  },
  methods: {
    BtnOk() {
      this.$emit('updateModal', false);
  }
 }
}
</script>