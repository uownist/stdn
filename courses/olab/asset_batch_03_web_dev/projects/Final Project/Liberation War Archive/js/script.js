


function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("displayDateTime").textContent = date;
};

setInterval(showDateTime, 1000);

