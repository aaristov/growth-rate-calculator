<template>
    <div>
        <span> OD1 </span>
        <input v-model="OD1" type='number' min=0 placeholder="Start mass">
        <span> OD2 </span>
        <input v-model="OD2" type='number' min=0 placeholder="End mass">
        <span> period </span>
        <input v-model="period" type='number' min=0  placeholder="hours/minutes">
        <br>
        <p>Doubling time: {{doublingTime}}</p>
    </div>

</template>

<script>
import { isNull } from 'util';
// eslint-disable-no-console

export default {
  name: 'Form',
  props: {
  },
  data() {
    return{
        OD1: '',   
        OD2: '',
        period: '',
        publicPath: ''
    }

  },
  created() {
    var hash = window.location.hash
    console.log(hash)

    var values = hash.match(/\d+(\.*)\d*/g)
    console.log(values)

    if (!isNull(values)){
        if (values.length == 3){
            this.OD1 = values[0]
            this.OD2 = values[1]
            this.period = values[2]
        }
    } else {
        window.location.hash = '?'
    }
  },
  computed : {
      doublingTime () {           
          let growthRate = Math.log(this.OD2 / this.OD1) / this.period
          let dTime = Math.log(2) / growthRate
          if (dTime > 0 & dTime != Infinity){
              window.location.hash = [this.OD1, this.OD2, this.period].join('_')

          } else {
              window.location.hash = '?'
          }
          return dTime.toPrecision(2)   
      }
  }

}
</script>

<style>
input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14pt;
  font-style:inherit;  
  width: fit-content;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>