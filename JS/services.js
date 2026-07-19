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


// SERVICE CARD ANIMATION

const cards = document.querySelectorAll(".service-card");

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
    card.style.transition = "0.7s";

});


// BUTTON ACTION

// const buttons = document.querySelectorAll(".service-card button");

// buttons.forEach(button => {

//     button.addEventListener("click", () => {

//         alert("Service Details Coming Soon!");

//     });

// });