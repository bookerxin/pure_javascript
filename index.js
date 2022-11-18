
window.onload = () => {

    let seconds = 0;
    let tens = 0;

    // Elements
    let secondsElement = document.getElementById('seconds')
    let tensElement = document.getElementById('tens')

    // Buttons
    let startButton = document.getElementById('start-button')
    let stopButton = document.getElementById('stop-button')
    let resetButton = document.getElementById('reset-button')

    let Interval;

    // Functionality
    startButton.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 50)
    }

    startTimer = () => {
        tens++;

        if (tens < 9) {
            tensElement.innerHTML = '0' + tens;
        }

        if (tens > 9) {
            tensElement.innerHTML = tens;
        }

        if (tens > 99) {

            console.log(seconds);

            seconds++;
            tens = 0;

            // Reset tens
            tensElement.innerHTML = tens;

            // Add seconds
            if (seconds < 9) {
                secondsElement.innerHTML = '0' + seconds;
            }

            if (seconds > 9) {
                secondsElement.innerHTML = seconds;
            }
        }

    }
}