const box = document.getElementById("reactionBox");
const message = document.getElementById("message");

let startTime;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function moveBox() {
    const left = Math.random() * (window.innerWidth - 200);
    const top = Math.random() * (window.innerHeight - 300);
    const size = Math.random() * 200 + 100;

    box.style.left = left + "px";
    box.style.top = top + "px";
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomColor();
    box.style.display = "block";
    box.className = "container reaction-box flex-col ready";

    startTime = new Date().getTime();
}

box.addEventListener("click", () => {
    const endTime = new Date().getTime();
    const reactionTimeMs = endTime - startTime;
    const reactionTimeSec = (reactionTimeMs / 1000).toFixed(3); // 3 decimal places

    box.style.display = "none";
    box.className = "container reaction-box flex-col idle";
    alert(`✅ Your reaction time is ${reactionTimeSec} seconds.`);

    setTimeout(moveBox, 10);
});

// Initial trigger
moveBox();
