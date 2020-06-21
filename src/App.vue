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
.app_container {
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
#snackbar {
    visibility: hidden; /* Hidden by default. Visible on click */
    min-width: 250px; /* Set a default minimum width */
    margin-left: -125px; /* Divide value of min-width by 2 */
    background-color: #333; /* Black background color */
    color: #fff; /* White text color */
    text-align: center; /* Centered text */
    border-radius: 2px; /* Rounded borders */
    padding: 16px; /* Padding */
    position: fixed; /* Sit on top of the screen */
    z-index: 1; /* Add a z-index if needed */
    left: 50%; /* Center the snackbar */
    bottom: 30px; /* 30px from the bottom */
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
#snackbar.show {
    visibility: visible; /* Show the snackbar */
    /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@-webkit-keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }
}

@keyframes fadein {
    from {
        bottom: 0;
        opacity: 0;
    }
    to {
        bottom: 30px;
        opacity: 1;
    }
}

@-webkit-keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
}

@keyframes fadeout {
    from {
        bottom: 30px;
        opacity: 1;
    }
    to {
        bottom: 0;
        opacity: 0;
    }
}
</style>
