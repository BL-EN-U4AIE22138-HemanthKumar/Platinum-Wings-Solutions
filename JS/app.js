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


// BUTTON ACTIONS

const appointmentBtn = document.querySelector(".primary-btn");

appointmentBtn.addEventListener("click", () => {
    alert("Appointment Booking Page Coming Soon!");
});

const ambulanceBtn = document.querySelector(".secondary-btn");

ambulanceBtn.addEventListener("click", () => {
    alert("Emergency Ambulance Service Activated!");
});


// SMOOTH SCROLL ANIMATION

const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }

    });

});


// INITIAL STYLE

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";
});