<template>
  <div class="dayContainer"></div>
</template>

<script>

export default {
  name: 'Day',
  props: {

  }
};

</script>

<style>
.dayContainer{
  height: 100px;
}
.dayContainer:nth-child(odd){
  background-color: rgb(27, 27, 27);
}
</style>
