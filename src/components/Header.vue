<template>
  <div class="header">
    <img src="assets/logo_bila.png" alt="Logo">
    <div class="site_description">Docházkový systém</div>
  </div>
</template>

<script>

export default {
  name: 'Header'

};

</script>

<style>
.header{
  background-color: #6699CC;
  display: flex;
  justify-content: space-around;
  color: rgb(29, 29, 29);
}
img{
  width: 25%;
  height: 100%;
  margin: 15px 0;
}
.site_description{
  align-self: center;
  font-weight: bold;

}
</style>
