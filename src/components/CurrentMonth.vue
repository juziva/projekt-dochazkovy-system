<template>
    <div class="current_month_container">
        {{ date.locale("cs").format(" MMMM YYYY ") }}
    </div>
</template>

<script>
import moment from "moment"
export default {
    name: "CurrentMonth",
    props: {
        date: moment,
    },
}
</script>

<style>
.current_month_container {
    width: 90%;
    padding: 15px;
    background-color: black;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
}
</style>
