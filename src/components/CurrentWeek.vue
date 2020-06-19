<template>
    <div class="current_week_container"> {{ date.locale("cs").format("MMM Do YY") }}</div>
</template>

<script>
import moment from "moment"
export default {
    name: "CurrentWeek",
    props: {
        date: moment,
    },
}
</script>

<style>
.current_week_container {
    width: 60%;
    padding: 20px;
    background-color: rgb(31, 31, 31);
    color: white;
    text-align: center;
}
</style>
