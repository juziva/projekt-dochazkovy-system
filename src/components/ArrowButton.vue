<template>
<div v-bind:class="[{ leftClass: direction === 'left', rightClass: direction === 'right' }, 'directionClass']"></div>
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
.directionClass {
  width: 0;
  height: 0;
  border-style: solid;
  margin: 15px;
}
.rightClass{
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #6699CC;
}
.leftClass{
  border-width: 8px 16px 8px 0;
  border-color: transparent #6699CC transparent transparent;
}
</style>
  