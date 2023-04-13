<template>
  <div class="home">
    <p ref="p">This is home page you all. {{ objOne.age }} </p>
    <p>This is home page you all. {{ objTwo.age }} </p>
    <button @click="GetElementText">Get Element</button>
    <button @click="GetElementTextTwo">Get Element</button>
  </div>
</template>

<script>
//refs are relactive value
import { ref, reactive } from 'vue'
/*ref we have to use the value property to access the value of the ref
//reactive don't to use the value
//you can't use primitive value with reactive
*/
export default {
  name: 'HomeView',
  components: {
  },
  setup(props) {
    let p = ref(null);
    let objOne = ref({ name: "daniel", age: 22 });
    let objTwo = reactive({ name: "lucien", age: 22 });
    //primitive value
    let nameOne = ref("daniel");
    // you can changed the value
    let nameTwo = reactive("lucien");
    //once you assigned as primitve value, you can't change the value
    const GetElementText = function () {
      p.value.textContent = "hello";
      objOne.value.age = 23
    }
    const GetElementTextTwo = function () {
      objTwo.age = 23
    }
    return { p, GetElementText, GetElementTextTwo, objOne, objTwo, nameOne, nameTwo }
  }
}
</script>
