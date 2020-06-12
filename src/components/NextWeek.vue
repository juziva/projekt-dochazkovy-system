<template>
  <div class="next_week_container">
    <div class="arrow_left"></div>
  </div>
</template>

<script>

export default {
  name: 'NextWeek'

};

</script>

<style>
.next_week_container{
  width: 20%;
  background-color: rgb(31, 31, 31);
  padding: 20px;
}
.arrow_left{
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent white;
  margin: 0 auto;
}
</style>
