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
        <div id="snackbar">Hodiny aktualizovány</div>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
import CurrentWeek from "./components/CurrentWeek.vue"
import ArrowButton from "./components/ArrowButton.vue"
import Day from "./components/Day.vue"
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
    background-color: rgb(0, 0, 0);
    color: white;
}
.app_container{

}
.week_container {
    display: flex;
    justify-content: center;
}
li {
    list-style-type: none;
    border-bottom: 1px solid rgb(86, 83, 112);
    background-color: #202029;
}
li:nth-child(n+6)>div {
    background-color: black;
}
li:nth-child(6) {
    margin-top: 4px;
    border-top: 1px solid rgb(86, 83, 112);
}

ul {
    margin: 0;
    padding: 0;
}
</style>
    