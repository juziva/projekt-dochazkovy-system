<template>
    <div class="current_week_container">
        {{ date.locale("cs").format("D. M.") }} -
        {{ date.clone().locale("cs").add(6, "days").format("D. M. Y") }}
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
    width: 90%;
    padding: 20px;
    background-color: rgb(34, 34, 34);
    color: white;
    text-align: center;
}
</style>
