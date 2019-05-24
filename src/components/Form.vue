<template>
    <div>
        <span> OD1 </span>
        <input v-model="OD1" type='number' min=0 placeholder="Your first OD">
        <span> OD2 </span>
        <input v-model="OD2" type='number' min=0 placeholder="Your second OD">
        <span> period </span>
        <input v-model="period" type='number' min=0  placeholder="Your time frame">
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
  computed : {
      doublingTime() {           
          let growthRate = Math.log(this.OD2 / this.OD1) / this.period
          let dTime = Math.log(2) / growthRate
          return dTime.toPrecision(2)
          
      }
  }

}
</script>
