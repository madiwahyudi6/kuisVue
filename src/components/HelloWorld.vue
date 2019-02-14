<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <hr>
    <b>Logika dasar</b>
    <br>
    <button @click="addNumber" class="button is-primary">Klik untuk mengurangi</button>
    Numbernya <b>{{ number }} </b>

    <br>

    <h1 v-if="number == 9"> ini angka 9</h1>
    <h1 v-else-if="number == 8"> ini angka {{ number }}</h1>

    <br>
    <b>Per arrayan</b>

    <ul>
      <li v-for="todo in todos">
        {{todo.x}}
        {{todo.y}}
      </li>
    </ul>

    <br>

    <b>Per hoveran </b>

    <br>

    <span v-bind:title="msg">
      Hover your mouse
    </span>

    <br>
    <b>Per realtime an</b>
    <br>

    <p>{{typing1}}</p>
    <input type="text" v-model="typing1">
    <br>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      typing1:'Typing here bro!',
      msg: 'Welcome to Your Diwah.jss',
      number: 10,
      todos: [
        {
          x: "data ke 1",
          y: "data ke 2",
        },
        {
          x: "data ke 3",
          y: "data ke 4"
        }
      ]
    }
  },
  methods:{
    addNumber(){
      this.number--
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
