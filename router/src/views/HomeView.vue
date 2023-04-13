<template>
  <div class="home">
    <p ref="p">This is home page you all. {{ objOne.age }} {{ nameTwo }}</p>
    <p>This is home page you all. {{ objTwo.age }}</p>
    <button @click="GetElementText">Get Element</button>
    <button @click="GetElementTextTwo">Get Element Two</button>
    <button @click="handleStopWatch">Stop watch</button>
    <br />
    <br />
    <input type="text" v-model="search" />
    <ul>
      <li v-for="fruit in fruitsFilter" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
//refs are relactive value
import { ref, reactive, computed, watchEffect, watch } from "vue";
/*ref we have to use the value property to access the value of the ref
//reactive don't to use the value
//you can't use primitive value with reactive
*/
export default {
  name: "HomeView",
  components: {},
  setup(props) {
    let p = ref(null);
    let fruits = ref([
      "apple",
      "pineapple",
      "grape",
      "dragonfruit",
      "peach",
      "watermelon",
      "pear",
      "orange",
      "strawberry",
      "banana",
      "lemon",
      "coconut",
    ]);
    let objOne = ref({ name: "daniel", age: 22 });
    let objTwo = reactive({ name: "lucien", age: 22 });
    let search = ref("");
    //primitive value
    let nameOne = ref("daniel");
    // you can changed the value
    let nameTwo = reactive("lucien");
    //once you assigned as primitve value, you can't change the value
    const GetElementText = function () {
      p.value.textContent = "hello";
      objOne.value.age = 23;
    };
    const GetElementTextTwo = function () {
      objTwo.age = 23;
      nameTwo = "hello";
    };
    //you can stop both watch & watcheffect by storing them the return value in 
    //some kind of variable
    //The watchEffect function can act as a watcher only when you assign a 
    //property or function inside it.
    const stopEffect = watchEffect(() => {
      console.log("fire some codes", search.value);
    });
    //every time that search ref value changes,some codes will fire in the watch
    const stopWatch = watch(search, () => {
      console.log("fire some codes");
    });
    let fruitsFilter = computed(() => {
      return fruits.value.filter((fruit) => fruit.includes(search.value));
    });
    const handleStopWatch = () => {
      stopEffect();
      stopWatch();
    };
    return {
      p,
      GetElementText,
      GetElementTextTwo,
      objOne,
      objTwo,
      nameOne,
      nameTwo,
      search,
      fruitsFilter,
      handleStopWatch,
    };
  },
};
</script>
