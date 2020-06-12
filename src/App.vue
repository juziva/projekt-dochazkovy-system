<template>
  <div>
  <Header />
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
    Header: Header
  }

};

</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
