<template>
    <div>
        <Header />
        <div class="week_container">
            <ArrowButton v-bind:direction="'left'" />
            <CurrentWeek />
            <ArrowButton v-bind:direction="'right'" />
        </div>
        <ul>
            <li v-for="day in days" :key="day">
                <Day v-bind:date="day" />
            </li>
        </ul>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import CurrentWeek from "./components/CurrentWeek.vue"
import ArrowButton from "./components/ArrowButton.vue"
import Day from "./components/Day.vue"
import moment from "moment"

console.log(moment().format())

export default {
    name: "App",
    data() {
        return {
            days: [
                new Date(2020, 6, 17),
                new Date(2020, 6, 17),
                new Date(2020, 6, 17),
            ],
        }
    },
    components: {
        Header: Header,
        CurrentWeek: CurrentWeek,
        ArrowButton: ArrowButton,
        Day: Day,
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: rgb(31, 31, 31);
    color: white;
}
.week_container {
    display: flex;
}
</style>
