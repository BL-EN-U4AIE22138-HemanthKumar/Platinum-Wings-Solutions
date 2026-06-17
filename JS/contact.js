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


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});


// FAQ ANIMATION

const faqBoxes = document.querySelectorAll(".faq-box");

window.addEventListener("scroll", () => {

    faqBoxes.forEach(box => {

        const top = box.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            box.style.opacity = "1";
            box.style.transform = "translateY(0)";

        }

    });

});

faqBoxes.forEach(box => {

    box.style.opacity = "0";
    box.style.transform = "translateY(40px)";
    box.style.transition = "0.7s";

});