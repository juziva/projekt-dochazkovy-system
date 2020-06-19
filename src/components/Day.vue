<template>
    <div class="dayContainer">
        <div class="date dayContainerColumn">
            {{ date.locale("cs").format("MMM Do YY") }}
        </div>
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
            {{ totalHours.toFixed(1) }}
        </div>
    </div>
</template>

<script>
import moment from "moment"

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
            console.log(totalHours)
        },
    },
    created() {
        this.recalculateTotalHours()
    },
}
</script>

<style>
.dayContainer {
    height: 100px;
    display: flex;
    align-items: center;
}

.dayContainer:nth-child(odd) {
    background-color: rgb(27, 27, 27);
}
.dayContainerColumn {
    flex-grow: 1;
    text-align: center;
}

input {
    width: 50%;
    height: 30px;
    border-radius: 4px;
    border: none;
}
</style>
