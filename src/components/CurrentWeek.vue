<template>
    <div class="current_week_container">
        {{ date.locale("cs").format("Do MMMM") }} -
        {{ date.locale("cs").add(6, "days").format("Do MMMM Y") }}
    </div>
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
