<template>
  <Cypher class="cypher"  @increaseIndex="increaseIndex()" @decreaseIndex="decreaseIndex()" :index="index"/>
  <div class="svg-container">
    <CharacterWheels class="wheel" :index="index"/>
  </div>
</template>

<script>
import Cypher from './components/Cypher.vue'
import CharacterWheels from './components/CharacterWheels.vue'

export default {
  name: 'App',
  components: {
    Cypher,
    CharacterWheels
  },
  data() {
        return {
            index: 0
        }
  },
  methods: {
    increaseIndex() {
      if (this.index < 25) {
        this.index++  
      } else {
          this.index = 0
      }
    },
    decreaseIndex() {
      if (this.index > 0) {
          this.index--
      } else {
          this.index = 25
      }        
    }
  }
}
//https://www.color-hex.com/color-palette/21837
</script>

<style>
  #app {
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .svg-container {
      height: 100vh;
      width: 100vw;
      overflow:hidden;
      position: absolute;
      z-index: -1;
  }
  .wheel {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .cypher {

  }
</style>
