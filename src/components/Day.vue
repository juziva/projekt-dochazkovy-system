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
                    v-on:change="updateStartTime"
                    v-model="startTime"
                />
            </div>
            <div class="endTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="updateEndTime"
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
            startTime: "8:00",
            endTime: "17:00",
            totalHours: 0,
            documentId: `${userId}:${this.date.format("YYYYMMDD")}`,
        }
    },
    props: {
        date: moment,
    },
    methods: {
        getTotalHours() {
            const duration = moment.duration(
                moment(this.endTime, "HH:mm") - moment(this.startTime, "HH:mm")
            )
            if (isNaN(duration.asHours())) {
                return 0
            }
            return duration.asHours() - 1
        },
        updateStartTime(event) {
            const totalHours = this.getTotalHours()

            const endTime = moment(
                `${this.date.format("YYYY-MM-DD")} ${this.endTime}`
            ).format("x")

            const startTime = moment(
                `${this.date.format("YYYY-MM-DD")} ${event.target.value}`
            ).format("x")

            db.collection("workDays")
                .doc(this.documentId)
                .set({
                    totalHours: totalHours,
                    startTime: startTime,
                    endTime: this.endTime,
                })
                .then(function () {
                    console.log("Document successfully written!")
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error)
                })
        },
        updateEndTime() {
            const totalHours = this.getTotalHours()
            const startTime = moment(
                `${this.date.format("YYYY-MM-DD")} ${this.startTime}`
            ).format("x")

            const endTime = moment(
                `${this.date.format("YYYY-MM-DD")} ${event.target.value}`
            ).format("x")

            db.collection("workDays")
                .doc(this.documentId)
                .set({
                    totalHours: totalHours,
                    startTime: startTime,
                    endTime: endTime,
                })
                .then(function () {
                    console.log("Document successfully written!")
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error)
                })
        },
    },
    created() {
        this.unsubscribe = db
            .collection("workDays")
            .doc(this.documentId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    console.log
                    const fireDay = doc.data()
                    if (fireDay.startTime) {
                        this.startTime = moment(fireDay.startTime, "x").format(
                            "HH:mm"
                        )
                    }
                    if (fireDay.endTime) {
                        this.endTime = moment(fireDay.endTime, "x").format(
                            "HH:mm"
                        )
                    }

                    console.log({ totalHours: fireDay.totalHours })
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
.dayInWeek2 {
    color: rgb(128, 128, 128);
    font-size: 14px;
}
</style>
