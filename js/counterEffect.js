const allCounterEffected = document.querySelectorAll(".counter-effect")

allCounterEffected.forEach((item, index) => {
    const maxCount = item.dataset.count
    let intervalDelay = index ? 1 : 100
    console.log(intervalDelay);
    


    const interval = setInterval(() => {
        let currentVal = parseInt(item.textContent)

        if (currentVal < maxCount) {
            currentVal += 1
            item.textContent = currentVal
        } else {
            clearInterval(interval)
        }
    }, intervalDelay)

})