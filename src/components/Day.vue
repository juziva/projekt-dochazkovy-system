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
            <div>-</div>
            <div class="endTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="recalculateTotalHours"
                    v-model="endTime"
                />
            </div>
            <div class="totalHours dayContainerColumn">
                {{ totalHours.toFixed(1) }}
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
        const documentId = `${userId}:${this.date.format("YYYYMMDD")}`
        this.unsubscribe = db
            .collection("workDays")
            .doc(documentId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const fireDay = doc.data()
                    this.startTime = moment(
                        fireDay.startTime.seconds * 1000
                    ).format("HH:mm")
                    this.endTime = moment(
                        fireDay.endTime.seconds * 1000
                    ).format("HH:mm")
                    this.totalHours = fireDay.totalHours
                }
            })
    },
    unmounted() {
        this.unsubscribe()
    },
}
</script>

<style>
.dayContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dayContainerRow {
    display: flex;
    align-items: center;
    flex-grow: 1;
    width: 90%;
    margin-bottom: 10px;
}
.date {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0 10px 0;
}

.dayContainerColumn {
    text-align: center;
    font-size: 1rem;
    width: 90%;
    
}
.totalHours {
    width: 10%;
}

input {
    width: 70%;
    border-radius: 3px;
    border: 1px solid #676382;
    background-color: rgb(57, 60, 79);
    color: white;
    padding: 8px;
}

.dayInWeek2 {
    color: rgb(128, 128, 128);
    font-size: 14px;
}
.dayInWeek1{
    padding: 0 10px 0 0;
}
</style>
