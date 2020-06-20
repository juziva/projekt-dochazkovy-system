<template>
    <div class="app_container">
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
        <SendButton />
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import CurrentWeek from "./components/CurrentWeek.vue"
import ArrowButton from "./components/ArrowButton.vue"
import Day from "./components/Day.vue"
import SendButton from "./components/SendButton.vue"
import moment from "moment"
import "moment/locale/cs"
import db from "./db"

moment.locale("cs")

console.log(moment().format("MMM Do YY"))

export default {
    name: "App",
    data() {
        return {
            days: [],
            weekStart: moment(),
            weekEnd: moment(),
        }
    },
    components: {
        Header: Header,
        CurrentWeek: CurrentWeek,
        ArrowButton: ArrowButton,
        Day: Day,
        SendButton: SendButton,
    },
    methods: {
        updateDays() {
            const days = []
            for (let i = 0; i <= 6; i++) {
                days.push(moment(this.weekStart).add(i, "days"))
            }
            this.days = days
        },
        setPreviousWeek() {
            this.weekStart = this.weekStart.add(-1, "week").clone()
            this.updateDays()
        },
        setNextWeek() {
            this.weekStart = this.weekStart.add(1, "week").clone()
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
.app_container{

}
.week_container {
    display: flex;
    background-color: rgb(34, 34, 34);
    justify-content: center;
}
li {
    list-style-type: none;
    border-bottom: 1px solid rgb(109, 109, 109);
    background-color: rgb(46, 46, 46);
}
li:nth-child(n+6) {
    background-color: rgb(0, 0, 0);
}

ul {
    margin: 0;
    padding: 0;
}
</style>
