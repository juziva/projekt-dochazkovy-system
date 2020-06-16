<template>
<div v-bind:class="{ left: direction === 'l', right: direction === 'r' }"></div>
</template>

<script>

export default {
  name: 'ArrowButton',
  props: {
    direction: String
  }
};

</script>

<style>
.direction {
  width: 0;
  height: 0;
  border-style: solid;
  margin: 20px;
}
.right{
  border-width: 10px 20px 10px 0;
  border-color: transparent #ffffff transparent transparent;
}
.left{
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #ffffff;
}
</style>
  