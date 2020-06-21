<template>
    <div class="app_container">
        <Header />
        <div class="week_container">
            <ArrowButton v-bind:direction="'left'" v-on:click.native="setPreviousMonth" />
            <CurrentMonth v-bind:date="monthStart" />
            <ArrowButton v-bind:direction="'right'" v-on:click.native="setNextMonth" />
        </div>
        <ul>
            <li v-for="day in days" :key="day">
                <TableRow v-bind:date="day" />
            </li>
        </ul>
    </div>
</template>

<script>
import Header from "./Header.vue"
import CurrentMonth from "./CurrentMonth.vue"
import ArrowButton from "./ArrowButton.vue"
import Day from "./Day.vue"
import TableRow from "./TableRow.vue"
import moment from "moment"
import "moment/locale/cs"
import db from "../db"

moment.locale("cs")

console.log(moment().format("MMM Do YY"))

export default {
    name: "EmployerPage",
    data() {
        return {
            days: [],
            monthStart: moment(),
            MonthEnd: moment(),
        }
    },
    components: {
        Header: Header,
        CurrentMonth: CurrentMonth,
        ArrowButton: ArrowButton,
        Day: Day,
        TableRow: TableRow
    },
    methods: {
        updateDays() {
            const days = []
            for (let i = 0; i <= 30; i++) {
                days.push(moment(this.monthStart).add(i, "days"))
            }
            this.days = days
        },
        setPreviousMonth() {
            this.monthStart = this.monthStart.add(-1, "month").clone()
            this.updateDays()
        },
        setNextMonth() {
            this.monthStart = this.monthStart.add(1, "month").clone()
            this.updateDays()
        },
    },
    created() {
        const currentDate = moment()
        this.monthStart = currentDate.clone().startOf("month")
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

.week_container {
    display: flex;
    justify-content: center;
}
li {
    list-style-type: none;
    border-bottom: 1px solid rgb(86, 83, 112);
    background-color: #202029;
}
li:nth-child(n + 6) > div {
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
@media screen and (min-width: 800px) {
    .app_container {
        width: 800px;
        margin: 0 auto;
    }
}
.snackbar {
    position: sticky;
    bottom: 5px;
    background-color: #6699cc;
    padding: 20px;
    border-radius: 2px;
    margin: 5px;
    text-align: center;
    color: black;
}
</style>
