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
export default {
  name: 'Form',
  props: {
  },
  data() {
    return{
        OD1: '',   
        OD2: '',
        period: ''
    }

  },
  created() {
      var pathname = window.location.pathname
      var urlParams = pathname.match(/#\d+(\.*)\d*/g)
      if (urlParams.length == 3){
        this.OD1 = urlParams[0]
        this.OD2 = urlParams[1]
        this.period = urlParams[2]
      }
  },
  computed : {
      doublingTime () {           
          let growthRate = Math.log(this.OD2 / this.OD1) / this.period
          let dTime = Math.log(2) / growthRate
          if (dTime > 0 & dTime != Infinity){
              var paramsUrl = '/#' + String(this.OD1) + '&' + String(this.OD2) + '&' + String(this.period)
              history.replaceState('', 'Growth rate calculator', paramsUrl);

          } else {
              history.replaceState('', 'Growth rate calculator', '/');
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