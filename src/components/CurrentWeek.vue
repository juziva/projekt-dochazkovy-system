<template>
  <div class="current_week_container">{{currentWeek}}</div>
</template>

<script>

export default {
  name: 'CurrentWeek',
  data(){
    return{
    currentWeek: "8.-14.6.2020"
    }
  }
};

</script>

<style>
.current_week_container{
  width: 60%;
  padding: 20px;
  background-color: rgb(31, 31, 31);
  color: white;
  text-align: center;
}
</style>
