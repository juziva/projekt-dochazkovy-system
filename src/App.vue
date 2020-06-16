<template>
  <div>
  <Header />
    <div class="week_container">
      <ArrowButton v-bind:direction="'l'" />
      <CurrentWeek />
      <ArrowButton v-bind:direction="'r'" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import CurrentWeek from "./components/CurrentWeek.vue"
import ArrowButton from "./components/ArrowButton.vue"

export default {
  name: 'App',
  components: {
    Header: Header,
    CurrentWeek: CurrentWeek,
    ArrowButton: ArrowButton
  }
};

</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: rgb(31, 31, 31);
}
.week_container{
  display: flex;
}
</style>
