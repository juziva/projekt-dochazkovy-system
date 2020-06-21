<template>
    <div class="dayItem">
        <div class="dayContainerAdmin">
        <div class="dayContainerRowAdmin">
          <div class="currentDayAdmin">
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
            <div class="inputFieldAdmin">
            <div class="startTimeAdmin dayContainerColumn">
                {{startTime}}
            </div>
            <div class="divider">-</div>
            <div class="endTimeAdmin dayContainerColumn">
                {{endTime}}
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
import { sn } from "vuetify"

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
.currentDayAdmin{
  display: flex;
  width: 35%;
  border-right: 1px solid rgb(86, 83, 112);
}
.dayItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.dayContainerAdmin{
    padding: 10px 24px;
    width: 100%;
}
.dayContainerRowAdmin {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dayContainerColumn {
    display: flex;
    align-items: center;
}
.inputFieldAdmin{
    display: flex;
    justify-content: space-between;
    width: 40%;
}
.totalHours {
    width: 50px;
    color: rgb(128, 128, 128);
    font-size: 14px;
    padding-left: 5px;
    border-left: 1px solid rgb(86, 83, 112);
}
.startTimeAdmin{
    width: 50%;
    font-size: 14px;
}
.endTimeAdmin{
    width: 50%;
    font-size: 14px;
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
    display: flex;
    align-self: center;
}
</style>
