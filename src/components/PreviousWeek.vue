<template>
  <div class="previous_week_container">
    <div class="arrow_right"></div>
  </div>
</template>

<script>

export default {
  name: 'PreviousWeek'

};

</script>

<style>
.previous_week_container{
  width: 20%;
  background-color: rgb(31, 31, 31);
  padding: 20px;
}
.arrow_right{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 20px 10px 0;
  border-color: transparent white transparent transparent;
  margin: 0 auto;
}
</style>
