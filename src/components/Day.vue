<template>
  <div class="dayContainer">
    <div class="date dayContainerColumn">{{date}}</div>
    <div class="startTime dayContainerColumn"><input type="text"></div>
    <div class="endTime dayContainerColumn"><input type="text"></div>
  </div>
</template>

<script>

export default {
  name: 'Day',
  data(){
    return{
      date: 'Pondělí 15.6.',
    }
  },
  props: {

  }
};

</script>

<style>
.dayContainer{
  height: 100px;
  display: flex;
  align-items: center;
}
.dayContainer:nth-child(odd){
  background-color: rgb(27, 27, 27);
}
.dayContainerColumn{
  flex-grow: 1;
  text-align: center;
}

input{
  width: 50%;
  height: 30px;
  border-radius: 4px;
  border: none;
}
</style>
