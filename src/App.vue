<template>
  <div>
  <Header />
    <div class="week_container">
      <ArrowButton v-bind:direction="'left'" />
      <CurrentWeek />
      <ArrowButton v-bind:direction="'right'" />
    </div>
      <Day />
        <Day />
          <Day />
          <Day />
            <Day />
            <Day />
              <Day />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import CurrentWeek from "./components/CurrentWeek.vue"
import ArrowButton from "./components/ArrowButton.vue"
import Day from "./components/Day.vue"

export default {
  name: 'App',
  components: {
    Header: Header,
    CurrentWeek: CurrentWeek,
    ArrowButton: ArrowButton,
    Day: Day
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
