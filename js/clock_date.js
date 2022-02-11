const clock = document.getElementById("clock")
const date = document.getElementById("date")
let doubleDot = false

function updateClock() {
    const now = new Date() // Now
    clock.innerHTML = `${now.getHours()}${doubleDot ? ":" : " "}${now.getMinutes() < 10 ? "0" : ""}${now.getMinutes()}`
    doubleDot = !doubleDot
}

function updateDate() {
    const now = new Date() // Now
    date.innerHTML = `${now.getDate()}/${now.getMonth() < 10 ? "0" : ""}${now.getMonth()+1}/${now.getFullYear()}`
}

updateClock()
updateDate()

setInterval(() => {
    updateClock()
}, 1000)
setInterval(() => {
    updateDate()
}, 60000)