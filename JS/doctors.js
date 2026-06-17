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


// BOOK BUTTON ACTION

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Appointment Booking Feature Coming Soon!");

    });

});


// FILTER FUNCTIONALITY

const filterButtons = document.querySelectorAll(".filter-btn");
const doctorCards = document.querySelectorAll(".doctor-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        doctorCards.forEach(card => {

            if(filter === "all"){

                card.style.display = "block";

            }
            else if(card.classList.contains(filter)){

                card.style.display = "block";

            }
            else{

                card.style.display = "none";

            }

        });

    });

});


// SEARCH FUNCTIONALITY

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    doctorCards.forEach(card => {

        const text = card.textContent.toLowerCase();

        if(text.includes(value)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

});


// CARD ANIMATION

window.addEventListener("scroll", () => {

    doctorCards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

doctorCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s";

});