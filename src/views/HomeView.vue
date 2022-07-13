<template>
  <div class="input">
    <input type="text" v-model="name" />
    <button @click="pushName">Submit</button>
    <div class="card-container">
      <div v-for="entry in Object.entries(myMap)" class="card">
        <p>{{ entry[0] }}</p>
        <p class="value">{{ entry[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'HomeView',

  data() {
    return {
      name: '',
    };
  },
  components: {},
  computed: {
    ...mapGetters({
      names: 'getNames',
    }),
    myMap() {
      let map = {};
      this.names.forEach((name) => {
        map[name] ? (map[name] += 1) : (map[name] = 1);
      });
      return map;
    },
  },
  methods: {
    ...mapMutations({
      updateNames: 'updateNames',
    }),

    pushName() {
      let stripped = this.name.trim();
      let newName = stripped.charAt(0).toUpperCase() + stripped.slice(1);
      if (/^[a-zA-Z\s.,]+$/.test(newName)) {
        this.updateNames(newName);

        // console.log(this.person);
      }
    },
  },
};
</script>

<style scoped>
.card-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10%;
  row-gap: 20px;
}
.card {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 1px rgba(39, 39, 39, 0.15);
  border-radius: 20px;
  margin-bottom: 10px;
  height: 200px;
  width: 200px;
  color: white;
}

p {
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  margin-top: 10px;
}

.input {
  text-align: center;
  margin-top: 60px;
}

input {
  height: 40px;
  width: 300px;
  border-radius: 18px;
  border: none;
  font-size: 15px;
  font-weight: 400;
}

button {
  margin-left: 30px;
  height: 30px;
  width: 120px;
  border-radius: 10px;
  border: none;
  background-color: greenyellow;
  color: black;
  font-weight: 500;
}

.value {
  color: greenyellow;
}
</style>
