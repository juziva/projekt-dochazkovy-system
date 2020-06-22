<template>
    <div class="app_container">
        <Header />
        <div class="week_container">
            <ArrowButton v-bind:direction="'left'" v-on:click.native="setPreviousMonth" />
            <CurrentMonth v-bind:date="monthStart" />
            <ArrowButton v-bind:direction="'right'" v-on:click.native="setNextMonth" />
        </div>
        <ul class="admin" >
            <li v-for="day in days" :key="day">
                <TableRow v-bind:date="day" />
            </li>
        </ul>
        <div class="footer">
        <div class="totalHoursOfMonth">Odpracováno: 170 hodin</div><ExportButton />
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue"
import CurrentMonth from "./CurrentMonth.vue"
import ArrowButton from "./ArrowButton.vue"
import Day from "./Day.vue"
import TableRow from "./TableRow.vue"
import ExportButton from "./ExportButton.vue"
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
        TableRow: TableRow,
        ExportButton: ExportButton
    },
    methods: {
        updateDays() {
            const days = []
            for (let i = 0; i <= moment(this.monthStart).daysInMonth() - 1; i++) {
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
.admin li {
    background-color: black !important;
}
.admin li:nth-child(6) {
    margin-top: 0;
    border-top: none;
}
ul {
    margin: 0;
    padding: 0;
}
.footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #6699CC;
    padding: 16px;
}
.totalHoursOfMonth{
    align-self: center;
    color: black;
}

@media screen and (min-width: 800px) {
    .app_container {
        width: 800px;
        margin: 0 auto;
    }
}

</style>
