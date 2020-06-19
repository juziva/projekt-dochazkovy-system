<template>
    <div class="current_week_container"> {{ date.locale("cs").format("MMM Do YY") }} - {{ date.locale("cs").add(6, 'days').format("MMM Do YY") }}</div>
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
    background-color: rgb(34, 34, 34);
    color: white;
    text-align: center;
}
</style>
