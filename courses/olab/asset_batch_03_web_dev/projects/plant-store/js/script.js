function showDateTime() {
    const dateTime = new Date();
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    document.getElementById('displayDateTime').innerText = date +' '+ time
}
setInterval(showDateTime,1000)

document.getElementById('plantQuiz').addEventListener('submit',function (e) {
    e.preventDefault();
    const sunlight = document.getElementById('sunlight').value;
    const care = document.getElementById('care').value;
    const pets = document.getElementById('pets').value;

    const resultDiv = document.getElementById('result');

    let  plantMatch =  '<h1 class=" shadow p-4 bg-danger-subtle">'

    if (sunlight === 'low' && care === 'easy' && pets === 'yes'){
        plantMatch += 'Rose Tee';
    }else if(sunlight === 'low' && care === 'easy' && pets === 'no'){
        plantMatch += 'Alovera';
    }else if(sunlight === 'low' && care === 'moderate' && pets === 'no'){
        plantMatch += 'snakers';
    }else {
        plantMatch += 'Banana tee';
    }
    plantMatch += '</h1>'
    resultDiv.innerHTML = plantMatch;
    resultDiv.style.display = 'block';
});













function sendMessage() {

    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById("chat-box");

     // Append user message
    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.innerText = message;
    chatBox.appendChild(userMsg);

    input.value = "";

    // Simulate bot reply after short delay
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.innerText = generateBotReply(message);
        chatBox.appendChild(botMsg);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}

function generateBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("water")) return "Most plants need watering once a week. Check if the topsoil is dry!";
    if (msg.includes("sunlight")) return "Place your plant near a window with indirect sunlight.";
    if (msg.includes("brown leaves")) return "Brown leaves can be due to overwatering or low humidity.";
    if (msg.includes("fertilizer")) return "Use a balanced fertilizer once a month during the growing season.";
    if (msg.includes("repot")) return "Repot when roots grow out of the drainage holes or every 1-2 years.";
    if (msg.includes("hello")) return "hello when roots grow out of the drainage holes or every 1-2 years.";

    return "That's interesting! Could you please give me more details about your plant issue?";
}

