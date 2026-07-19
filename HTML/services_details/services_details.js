/* =========================================================
   SERVICES DATA
   Each entry describes one card from services.html.
   The "service" query param on services_details.html
   (e.g. services_details.html?service=3) picks which
   entry gets rendered into the page.
========================================================= */

const servicesData = [

    // 1. Doctor Appointment Booking
    {
        id: 1,
        icon: "fa-calendar-check",
        title: "Doctor Appointment Booking",
        pageTitle: "Doctor Appointment Booking | Platinum Wings Solutions",
        heroDesc: "Book appointments with experienced doctors instantly, avoid long waiting queues, and receive timely healthcare consultations through our smart healthcare platform.",
        heroButton: "Book Appointment",
        about: {
            heading: "Healthcare Access Made Simple",
            paragraphs: [
                "Our Doctor Appointment Booking service helps patients connect with healthcare professionals quickly and conveniently. Whether you need a routine consultation, specialist visit, follow-up appointment, or urgent healthcare guidance, our platform makes scheduling easy.",
                "Patients can browse available doctors, choose preferred time slots, receive instant confirmations, and manage appointments online without unnecessary paperwork or long waiting periods."
            ],
            image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&q=80"
        },
        features: [
            { icon: "fa-clock", title: "Real-Time Scheduling", desc: "View doctor availability instantly and choose appointment slots that fit your schedule." },
            { icon: "fa-user-doctor", title: "Verified Specialists", desc: "Access trusted healthcare professionals from multiple medical specialties." },
            { icon: "fa-bell", title: "Smart Reminders", desc: "Receive notifications and reminders before every consultation." },
            { icon: "fa-shield-heart", title: "Secure Healthcare Data", desc: "Your appointment history and patient details remain secure and protected." }
        ],
        benefits: [
            "Faster access to healthcare services",
            "Reduced hospital waiting times",
            "Easy appointment management",
            "Instant booking confirmation",
            "Improved patient convenience",
            "Better healthcare accessibility"
        ],
        process: [
            { num: "01", title: "Select Doctor", desc: "Browse available doctors and specialties." },
            { num: "02", title: "Choose Time Slot", desc: "Pick a date and consultation time." },
            { num: "03", title: "Confirm Appointment", desc: "Receive instant booking confirmation." },
            { num: "04", title: "Visit Hospital", desc: "Attend your consultation with minimal waiting." }
        ],
        cta: {
            heading: "Ready To Schedule Your Consultation?",
            text: "Experience smarter healthcare with quick and secure appointment booking services.",
            button: "Get Started Today"
        }
    },

    // 2. Medical Report Upload
    {
        id: 2,
        icon: "fa-file-medical",
        title: "Medical Report Upload",
        pageTitle: "Medical Report Upload | Platinum Wings Solutions",
        heroDesc: "Securely upload medical reports and health records online, so doctors can review your history before consultation and provide faster, more informed care.",
        heroButton: "Upload Reports",
        about: {
            heading: "Your Medical History, Always Ready",
            paragraphs: [
                "Our Medical Report Upload service lets patients digitally store and share lab results, prescriptions, scans, and past medical records with their doctors ahead of a visit. No more carrying folders of paperwork to every appointment.",
                "Doctors can review uploaded reports in advance, understand a patient's medical background, and use consultation time more effectively for diagnosis and treatment planning rather than paperwork."
            ],
            image: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1200&q=80"
        },
        features: [
            { icon: "fa-cloud-arrow-up", title: "Easy Uploads", desc: "Upload reports, scans, and prescriptions in just a few taps from any device." },
            { icon: "fa-folder-open", title: "Organized Records", desc: "Keep all your medical history sorted and accessible in one secure place." },
            { icon: "fa-lock", title: "End-To-End Security", desc: "Reports are encrypted and only accessible to you and your chosen doctor." },
            { icon: "fa-user-doctor", title: "Doctor Pre-Review", desc: "Doctors can study your reports before your appointment for faster consultations." }
        ],
        benefits: [
            "No repeated physical paperwork",
            "Faster and more informed consultations",
            "Records accessible anytime, anywhere",
            "Reduced risk of losing documents",
            "Simplified specialist referrals",
            "Better continuity of care"
        ],
        process: [
            { num: "01", title: "Scan Or Upload", desc: "Add reports directly from your phone or computer." },
            { num: "02", title: "Organize Records", desc: "Reports are automatically sorted by date and type." },
            { num: "03", title: "Share With Doctor", desc: "Grant your doctor secure access before your visit." },
            { num: "04", title: "Get Reviewed", desc: "Doctor reviews history and prepares for consultation." }
        ],
        cta: {
            heading: "Ready To Digitize Your Medical Records?",
            text: "Keep your health history secure, organized, and just a click away for every consultation.",
            button: "Upload Now"
        }
    },

    // 3. 24/7 Ambulance Services
    {
        id: 3,
        icon: "fa-truck-medical",
        title: "24/7 Ambulance Services",
        pageTitle: "24/7 Ambulance Services | Platinum Wings Solutions",
        heroDesc: "Round-the-clock emergency ambulance support with rapid response, so critical medical situations are met with speed, care, and reliability whenever they happen.",
        heroButton: "Request Ambulance",
        about: {
            heading: "Emergency Help, Anytime You Need It",
            paragraphs: [
                "Our 24/7 Ambulance Services provide fast, dependable emergency transport for patients facing critical medical situations. A single request connects you to the nearest available ambulance and trained response team.",
                "From accident response to urgent hospital transfers, our network is designed to minimize response time and get patients the care they need without delay, day or night."
            ],
            image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=1200&q=80"
        },
        features: [
            { icon: "fa-location-dot", title: "Live Location Tracking", desc: "Track the ambulance in real time from dispatch to arrival." },
            { icon: "fa-bolt", title: "Rapid Response", desc: "Optimized routing ensures the fastest possible arrival time." },
            { icon: "fa-user-nurse", title: "Trained Medical Staff", desc: "Ambulances are staffed with trained personnel for on-the-way care." },
            { icon: "fa-phone-volume", title: "One-Tap Emergency Call", desc: "Request emergency assistance instantly with a single tap." }
        ],
        benefits: [
            "Available 24 hours, every day",
            "Faster emergency response times",
            "Trained staff for on-route care",
            "Real-time tracking for peace of mind",
            "Priority hospital coordination",
            "Reliable support during critical moments"
        ],
        process: [
            { num: "01", title: "Send Request", desc: "Tap to request an ambulance from the app." },
            { num: "02", title: "Get Matched", desc: "Nearest available ambulance is dispatched instantly." },
            { num: "03", title: "Track Arrival", desc: "Follow the ambulance in real time as it approaches." },
            { num: "04", title: "Receive Care", desc: "Patient is stabilized en route and transferred to hospital." }
        ],
        cta: {
            heading: "Need Emergency Assistance?",
            text: "Our ambulance network is ready around the clock to respond when every second counts.",
            button: "Get Help Now"
        }
    },

    // 4. AI Healthcare Assistant
    {
        id: 4,
        icon: "fa-robot",
        title: "AI Healthcare Assistant",
        pageTitle: "AI Healthcare Assistant | Platinum Wings Solutions",
        heroDesc: "Smart AI-powered guidance that helps patients understand symptoms, find the right specialist, and navigate their healthcare journey with confidence.",
        heroButton: "Talk To AI Assistant",
        about: {
            heading: "Smarter Healthcare Guidance, Instantly",
            paragraphs: [
                "Our AI Healthcare Assistant offers patients round-the-clock support for common healthcare questions, symptom guidance, and appointment suggestions. It acts as a helpful first step before speaking with a doctor.",
                "By analyzing patient input and healthcare data, the assistant can recommend relevant specialists, suggest appointment timing, and provide general wellness guidance, making healthcare feel more approachable and less overwhelming."
            ],
            image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1200&q=80"
        },
        features: [
            { icon: "fa-comments", title: "24/7 Chat Support", desc: "Get answers to healthcare questions anytime, day or night." },
            { icon: "fa-stethoscope", title: "Symptom Guidance", desc: "Receive general guidance on symptoms and next steps to take." },
            { icon: "fa-user-doctor", title: "Specialist Suggestions", desc: "Get matched with the right type of doctor for your concern." },
            { icon: "fa-chart-line", title: "Personalized Insights", desc: "Understand patterns in your health data over time." }
        ],
        benefits: [
            "Instant healthcare guidance anytime",
            "Helps identify the right specialist",
            "Reduces unnecessary hospital visits",
            "Simplifies healthcare decision-making",
            "Personalized to your health profile",
            "Always available, no waiting required"
        ],
        process: [
            { num: "01", title: "Describe Concern", desc: "Tell the AI assistant what you're experiencing." },
            { num: "02", title: "Get Guidance", desc: "Receive general guidance and possible next steps." },
            { num: "03", title: "Specialist Match", desc: "Get suggestions for the right doctor to consult." },
            { num: "04", title: "Book Consultation", desc: "Move straight into scheduling an appointment." }
        ],
        cta: {
            heading: "Ready For Smarter Healthcare Guidance?",
            text: "Let our AI Healthcare Assistant help you take the next step with confidence.",
            button: "Start Chatting"
        }
    },

    // 5. Smart Notifications
    {
        id: 5,
        icon: "fa-bell",
        title: "Smart Notifications",
        pageTitle: "Smart Notifications | Platinum Wings Solutions",
        heroDesc: "Stay informed with timely appointment reminders, emergency alerts, and healthcare notifications, so you never miss an important update.",
        heroButton: "Manage Notifications",
        about: {
            heading: "Never Miss What Matters",
            paragraphs: [
                "Our Smart Notifications service keeps patients informed at every step of their healthcare journey. From appointment reminders to medication schedules and emergency alerts, notifications are delivered exactly when they're needed.",
                "The system is designed to reduce missed appointments and keep patients engaged with their care plan, while also delivering urgent alerts during emergencies or critical updates from hospitals and doctors."
            ],
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
        },
        features: [
            { icon: "fa-calendar-day", title: "Appointment Reminders", desc: "Receive timely alerts before every scheduled consultation." },
            { icon: "fa-pills", title: "Medication Alerts", desc: "Stay on track with reminders for prescribed medication." },
            { icon: "fa-triangle-exclamation", title: "Emergency Alerts", desc: "Get urgent notifications during critical healthcare situations." },
            { icon: "fa-sliders", title: "Customizable Preferences", desc: "Choose which notifications matter most to you." }
        ],
        benefits: [
            "Fewer missed appointments",
            "Better medication adherence",
            "Timely emergency updates",
            "Improved communication with hospital",
            "Personalized notification preferences",
            "Peace of mind for patients and families"
        ],
        process: [
            { num: "01", title: "Set Preferences", desc: "Choose the types of alerts you want to receive." },
            { num: "02", title: "Stay Connected", desc: "Notifications sync automatically with your appointments." },
            { num: "03", title: "Get Reminded", desc: "Receive timely alerts before key healthcare events." },
            { num: "04", title: "Take Action", desc: "Respond quickly to reminders and emergency alerts." }
        ],
        cta: {
            heading: "Ready To Stay Informed?",
            text: "Turn on Smart Notifications and never miss an important healthcare update again.",
            button: "Enable Notifications"
        }
    },

    // 6. Medical Loan Assistance
    {
        id: 6,
        icon: "fa-hand-holding-dollar",
        title: "Medical Loan Assistance",
        pageTitle: "Medical Loan Assistance | Platinum Wings Solutions",
        heroDesc: "Financial support solutions designed to help patients manage treatments, surgeries, and emergency medical expenses without unnecessary stress.",
        heroButton: "Apply For Assistance",
        about: {
            heading: "Healthcare Shouldn't Wait On Finances",
            paragraphs: [
                "Our Medical Loan Assistance service connects patients with financial support options for treatments, surgeries, and emergency medical expenses. We understand that healthcare costs can be unpredictable, and timely access to funds matters.",
                "Patients can check eligibility, compare available plans, and apply for assistance directly through our platform, making it easier to focus on recovery instead of financial stress."
            ],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80"
        },
        features: [
            { icon: "fa-magnifying-glass-dollar", title: "Quick Eligibility Check", desc: "Find out what financial assistance options are available to you." },
            { icon: "fa-file-signature", title: "Simple Application", desc: "Apply for medical loans online with minimal paperwork." },
            { icon: "fa-hospital", title: "Hospital Partnerships", desc: "Access financing options coordinated with partner hospitals." },
            { icon: "fa-shield-halved", title: "Transparent Terms", desc: "Understand repayment terms clearly before you commit." }
        ],
        benefits: [
            "Reduced financial stress during treatment",
            "Fast application and approval process",
            "Flexible support for various treatments",
            "Transparent and clear loan terms",
            "Coordinated with partner hospitals",
            "Focus on recovery, not finances"
        ],
        process: [
            { num: "01", title: "Check Eligibility", desc: "See which assistance options apply to your situation." },
            { num: "02", title: "Compare Options", desc: "Review available plans and repayment terms." },
            { num: "03", title: "Submit Application", desc: "Apply online with the required basic details." },
            { num: "04", title: "Get Support", desc: "Receive approved assistance to cover medical costs." }
        ],
        cta: {
            heading: "Need Financial Support For Treatment?",
            text: "Let us help you find the right medical loan assistance option for your needs.",
            button: "Apply Today"
        }
    }

];

/* =========================================================
   RENDER LOGIC
   Reads ?service=N from the URL and fills the page with
   the matching entry from servicesData. Falls back to
   service 1 if the param is missing or invalid.
========================================================= */

function getServiceIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("service"), 10);
    const exists = servicesData.some(s => s.id === id);
    return exists ? id : 1;
}

function renderService() {
    const id = getServiceIdFromURL();
    const service = servicesData.find(s => s.id === id) || servicesData[0];

    // Page title
    document.title = service.pageTitle;
    const pageTitleEl = document.getElementById("page-title");
    if (pageTitleEl) pageTitleEl.textContent = service.pageTitle;

    // Hero
    const heroIcon = document.getElementById("hero-icon");
    if (heroIcon) heroIcon.innerHTML = `<i class="fa-solid ${service.icon}"></i>`;

    const heroTitle = document.getElementById("hero-title");
    if (heroTitle) heroTitle.textContent = service.title;

    const heroDesc = document.getElementById("hero-desc");
    if (heroDesc) heroDesc.textContent = service.heroDesc;

    const heroBtn = document.querySelector(".hero-content button");
    if (heroBtn) heroBtn.textContent = service.heroButton;

    // About
    const aboutHeading = document.getElementById("about-heading");
    if (aboutHeading) aboutHeading.textContent = service.about.heading;

    const aboutText = document.getElementById("about-text");
    if (aboutText) {
        aboutText.innerHTML = "";
        service.about.paragraphs.forEach(paragraph => {
            const p = document.createElement("p");
            p.textContent = paragraph;
            aboutText.appendChild(p);
        });
    }

    const aboutImage = document.getElementById("about-image");
    if (aboutImage) {
        aboutImage.src = service.about.image;
        aboutImage.alt = service.title;
    }

    // Features
    const featuresContainer = document.getElementById("features-container");
    if (featuresContainer) {
        featuresContainer.innerHTML = service.features.map(feature => `
            <div class="feature-card">
                <i class="fa-solid ${feature.icon}"></i>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
            </div>
        `).join("");
    }

    // Benefits
    const benefitsContainer = document.getElementById("benefits-container");
    if (benefitsContainer) {
        benefitsContainer.innerHTML = service.benefits.map(benefit => `
            <div class="benefit-box">
                <i class="fa-solid fa-check"></i>
                ${benefit}
            </div>
        `).join("");
    }

    // Process
    const processContainer = document.getElementById("process-container");
    if (processContainer) {
        processContainer.innerHTML = service.process.map(step => `
            <div class="process-box">
                <span>${step.num}</span>
                <h3>${step.title}</h3>
                <p>${step.desc}</p>
            </div>
        `).join("");
    }

    // CTA
    const ctaHeading = document.getElementById("cta-heading");
    if (ctaHeading) ctaHeading.textContent = service.cta.heading;

    const ctaText = document.getElementById("cta-text");
    if (ctaText) ctaText.textContent = service.cta.text;

    const ctaButton = document.getElementById("cta-button");
    if (ctaButton) ctaButton.textContent = service.cta.button;
}

document.addEventListener("DOMContentLoaded", renderService);
