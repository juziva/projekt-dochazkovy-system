<template>
    <div class="dayContainer">
        <div class="date dayContainerColumn">
            <div class="dayInWeek1">
                {{
                    date.locale("cs").format("dddd").charAt(0).toUpperCase() +
                    date.locale("cs").format("dddd").slice(1)
                }}
            </div>
            <div class="dayInWeek2">
                {{ date.locale("cs").format("D. M.") }}
            </div>
        </div>
        <div class="dayContainerRow">
            <div class="startTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="recalculateTotalHours"
                    v-model="startTime"
                />
            </div>
            <div class="endTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="recalculateTotalHours"
                    v-model="endTime"
                />
            </div>
            <div class="totalHours dayContainerColumn">
                {{
                    (this.fireDay && fireDay.totalHours) ||
                    totalHours.toFixed(1)
                }}
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment"
import { userId } from "../main.js"
import db from "../db.js"

export default {
    name: "Day",
    data() {
        return {
            startTime: "08:00",
            endTime: "17:00",
            totalHours: 0,
            fireDay: [],
        }
    },
    props: {
        date: moment,
    },
    methods: {
        recalculateTotalHours() {
            const duration = moment.duration(
                moment(this.endTime, "HH:mm") - moment(this.startTime, "HH:mm")
            )
            this.totalHours = duration.asHours() - 1
            if (isNaN(duration.asHours())) {
                this.totalHours = 0
            }
        },
    },
    created() {
        if (this.date.day() === 6 || this.date.day() === 0) {
            this.startTime = ""
            this.endTime = ""
        }
        this.recalculateTotalHours()
        const documentId = `${userId}:${this.date.format("YYYYMMDD")}`
        this.$bind("fireDay", db.collection("workDays").doc(documentId))
    },
}
</script>

<style>
.dayContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
}
.dayContainerRow {
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 90%;
}
.date {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}

.dayContainerColumn {
    flex-grow: 1;
    text-align: center;
    font-size: 1rem;
    width: 90%;
}
.totalHours {
    width: 10%;
}

input {
    width: 80%;
    height: 30px;
    border-radius: 3px;
    border: none;
}
.dayInWeek2{
    color: rgb(128, 128, 128);
    font-size: 14px;
}
</style>
