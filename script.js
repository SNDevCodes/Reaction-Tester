const box = document.getElementById("reactionBox");
const message = document.getElementById("message");

let startTime, timeoutId;
let isWaiting = false;
let isReadyToClick = false;

function setBoxState(state, text) {
    box.className = "container reaction-box flex-col " + state;
    message.textContent = text;
}

box.addEventListener("click", () => {
    if (isWaiting) {
        clearTimeout(timeoutId);
        setBoxState("too-soon", "⛔ Too soon! Click to try again.");
        reset();
        return;
    }

    if (isReadyToClick) {
        const endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        setBoxState("idle", `🎯 Your reaction time is ${reactionTime} ms. Click to try again.`);
        isReadyToClick = false;
        return;
    }

    // Start test
    setBoxState("waiting", "Wait for green...");
    isWaiting = true;

    const delay = Math.floor(Math.random() * 4000) + 1000;
    timeoutId = setTimeout(() => {
        setBoxState("ready", "CLICK!");
        startTime = new Date().getTime();
        isWaiting = false;
        isReadyToClick = true;
    }, delay);
});

function reset() {
    isWaiting = false;
    isReadyToClick = false;
}
