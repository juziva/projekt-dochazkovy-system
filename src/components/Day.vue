<template>
    <div class="dayItem">
        <div class="dayContainer">
        <div class="dayContainerColumn">
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
            <div class="inputField">
            <div class="startTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="updateStartTime"
                    v-model="startTime"
                />
            </div>
            <div class="divider">-</div>
            <div class="endTime dayContainerColumn">
                <input
                    type="time"
                    v-on:change="updateEndTime"
                    v-model="endTime"
                />
            </div>
            </div>
            <div class="totalHours dayContainerColumn">
                {{ totalHours.toFixed(1) }}
            </div>
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
            totalHours: 8,
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

            const endTime = this.formatTimeToDbFormat(this.endTime)

            const startTime = this.formatTimeToDbFormat(event.target.value)

            this.updateDayRecordinFirebase({ startTime, endTime, totalHours })
        },
        updateDayRecordinFirebase({ startTime, endTime, totalHours }) {
            db.collection("workDays")
                .doc(this.documentId)
                .set({
                    totalHours,
                    startTime,
                    endTime,
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
            const startTime = this.formatTimeToDbFormat(this.startTime)

            const endTime = this.formatTimeToDbFormat(event.target.value)

            this.updateDayRecordinFirebase({ startTime, endTime, totalHours })
        },
        updateDayDataFromFirebase(dayRecord) {
            if (dayRecord.startTime) {
                this.startTime = moment(dayRecord.startTime, "x").format(
                    "HH:mm"
                )
            }
            if (dayRecord.endTime) {
                this.endTime = moment(dayRecord.endTime, "x").format("HH:mm")
            }

            this.totalHours = dayRecord.totalHours
        },
        formatTimeToDbFormat(time) {
            return moment(`${this.date.format("YYYY-MM-DD")} ${time}`).format(
                "x"
            )
        },
    },
    created() {
        this.unsubscribe = db
            .collection("workDays")
            .doc(this.documentId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const dayRecord = doc.data()
                    this.updateDayDataFromFirebase(dayRecord)
                }
            })
    },
    unmounted() {
        this.unsubscribe()
    },
}
</script>

<style>
*{
    box-sizing: border-box;
}
.dayItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dayContainer{
    padding: 16px;
    width: 100%;
}
.dayContainerRow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
}
.dayContainerColumn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.inputField{
    display: flex;
    justify-content: space-between;
    width: 90%;
}
.totalHours {
    width: 50px;
    color: rgb(128, 128, 128);
    font-size: 14px;
    padding-left: 5px;
}
.startTime{
    width: 50%;
}
.endTime{
    width: 50%;
}
input {
    border-radius: 3px;
    border: 1px solid #676382;
    background-color: rgb(57, 60, 79);
    color: white;
    padding: 8px;
    width: 100%;
}
.dayInWeek2 {
    color: rgb(128, 128, 128);
    font-size: 14px;
}
.dayInWeek1 {
    padding: 0 10px 0 0;
}
.divider{
    padding: 0 10px;
}
</style>
