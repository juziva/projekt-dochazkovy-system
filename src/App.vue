<template>
    <EmployeePage />
</template>

<script>
import EmployeePage from "./components/EmployeePage.vue"
import EmployerPage from "./components/EmployerPage.vue"

export default {
    name: "App",
}
</script>

<style>
<<<<<<< HEAD
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
.snackbar {
    /* position: sticky;
    bottom: 5px;
    background-color: rgb(128, 128, 128);
    padding: 7px;
    border-radius: 2px;
    margin: 5px;
    text-align: center;
    color: black;  puvodni modra verze bez animace, */

    /* position: sticky;
    bottom: 5px;
    border-radius: 0.25rem;
    background-color: #333;
    padding: 10px;
    /* box-shadow: 0 3px 5px -1px rgba(51, 51, 51, 0.15),
        0 6px 10px 0 rgba(51, 51, 51, 0.15), 0 1px 18px 0 rgba(51, 51, 51, 0.15);
    color: rgba(255, 255, 255, 0.87);
    min-width: 350px;
    max-width: 90vw; */

    background-color: #333;

    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;

    /* transform: scale(0.87);
     opacity: 0;
    z-index: 1000;
    transform-origin: center;
    animation: notificationPop 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
        forwards; */
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
=======
>>>>>>> 229e73d5907a7f3753840b19b2b52c035362083b
</style>
