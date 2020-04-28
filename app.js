fetch("http://localhost:3000/exercises")
    .then(response => response.json())
    .then(exercise => {
        
        excercies.map(exercise => {

            const activityType = document.createElement("h2");
            activityType.innerHTML = `<a href=activityShow.html?id=${exercise.id}>${exercise.type}</a>`
            document.body.append(activityType);
        })
    })

document.addEventListener("DOMContentLoaded", () => {
    console.log("%cDOM Content Loaded and Parsed!", "color: magenta")


    const calculatorForm = document.querySelector('.calculator-form')
    const recoveryTime = document.querySelector('.recovery-time')

    calculatorForm.addEventListener('submit', () => {
        event.preventDefault()
        calculateRecovery(calculatorForm)
    })

    function calculateRecovery(form) {
        const formData = new FormData(form)
        const activityType = formData.get("activity-type")
        const duration = formData.get("duration")
        const intensity = formData.get("intensity")
        const password = formData.get("password")

        recoveryTime.innerText = `Recovery Time: ${(duration * intensity * activityType) / 20} Hours`

    }

})