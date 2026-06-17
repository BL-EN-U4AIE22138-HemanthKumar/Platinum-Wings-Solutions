// IMPORTANT:
// NEVER expose your real OpenRouter API key in frontend code.
// Create a backend API later and store the key securely in environment variables.

const API_KEY = "YOUR_OPENROUTER_API_KEY";

const MODEL = "nvidia/nemotron-3-super-120b-a12b:free";


// ELEMENTS

const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");


// SEND MESSAGE

async function sendMessage(){

    const message = userInput.value.trim();

    if(message === "") return;


    // USER MESSAGE

    addMessage(message, "user-message");

    userInput.value = "";


    // LOADING MESSAGE

    const loadingDiv = document.createElement("div");

    loadingDiv.classList.add("message", "bot-message");

    loadingDiv.innerHTML = "<p>Typing...</p>";

    chatBody.appendChild(loadingDiv);

    scrollToBottom();


    try{

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {

            method: "POST",

            headers: {

                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                model: MODEL,

                messages: [
                    {
                        role: "system",
                        content: "You are a helpful healthcare AI assistant for Platinum Wings Solutions. Give short, useful, safe healthcare guidance and suggest consulting doctors when needed."
                    },
                    {
                        role: "user",
                        content: message
                    }
                ]

            })

        });


        const data = await response.json();

        loadingDiv.remove();


        const botReply = data.choices?.[0]?.message?.content ||
        "Sorry, Server error under development. Please try again later.";


        addMessage(botReply, "bot-message");

    }
    catch(error){

        loadingDiv.remove();

        addMessage(
            "Error connecting to AI service. Please try again later.",
            "bot-message"
        );

        console.error(error);

    }

}


// ADD MESSAGE

function addMessage(text, className){

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message", className);

    messageDiv.innerHTML = `<p>${text}</p>`;

    chatBody.appendChild(messageDiv);

    scrollToBottom();

}


// AUTO SCROLL

function scrollToBottom(){

    chatBody.scrollTop = chatBody.scrollHeight;

}


// BUTTON CLICK

sendBtn.addEventListener("click", sendMessage);


// ENTER KEY

userInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});


// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";

    }
    else{

        navbar.style.background = "white";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";

    }

});