<template>
    <div>
        <Header />
        <div class="week_container">
            <ArrowButton
                v-bind:direction="'left'"
                v-on:click.native="setPreviousWeek"
            />
            <CurrentWeek v-bind:date="weekStart" />
            <ArrowButton
                v-bind:direction="'right'"
                v-on:click.native="setNextWeek"
            />
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

console.log(moment().format("MMM Do YY"))

export default {
    name: "App",
    data() {
        return {
            days: [moment(), moment(), moment()],
            WeekStart: moment(),
        }
    },
    components: {
        Header: Header,
        CurrentWeek: CurrentWeek,
        ArrowButton: ArrowButton,
        Day: Day,
    },
    methods: {
        updateDays() {
            const days = []
            for (let i = 0; i <= 6; i++) {
                days.push(moment(this.weekStart).add(i, "days"))
            }
            console.log(days)
            this.days = days
        },
        setPreviousWeek() {
            this.weekStart = this.weekStart.add(-1, "week")
            this.updateDays()
        },
        setNextWeek() {
            this.weekStart = this.weekStart.add(1, "week")
            this.updateDays()
        },
    },
    created() {
        const currentDate = moment()
        this.weekStart = currentDate.clone().startOf("week")
        this.updateDays()
    },
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: black;
    color: white;
}
.week_container {
    display: flex;
    background-color: rgb(34, 34, 34);
}
li {
    list-style-type: none;
}
li:nth-child(even) {
    background-color: rgb(34, 34, 34);
}
ul{
    margin: 0;
    padding: 0;
}
</style>
