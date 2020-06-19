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
import "moment/locale/cs"

moment.locale("cs")

console.log(moment().format())

export default {
    name: "App",
    data() {
        return {
            days: [moment(), moment(), moment()],
        }
    },
    components: {
        Header: Header,
        CurrentWeek: CurrentWeek,
        ArrowButton: ArrowButton,
        Day: Day,
    },
    methods: {
        magicFunction() {
            const currentDate = moment()
            const weekStart = currentDate.clone().startOf("week")
            const days = []
            for (let i = 0; i <= 6; i++) {
                days.push(moment(weekStart).add(i, "days"))
            }
            console.log(days)
            return days
        },
    },
    created() {
        this.days = this.magicFunction()
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
