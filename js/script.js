// ==================== SAFE STATS ====================

let students = 2500;
let faculty = 150;
let departments = 25;
let years = 10;

function updateStats() {

    const studentsEl = document.getElementById("students");
    const facultyEl = document.getElementById("faculty");
    const departmentsEl = document.getElementById("departments");
    const yearsEl = document.getElementById("years");

    if (studentsEl) studentsEl.innerText = students + "+";
    if (facultyEl) facultyEl.innerText = faculty + "+";
    if (departmentsEl) departmentsEl.innerText = years + "+";
    if (yearsEl) yearsEl.innerText = years + "+";
}

updateStats();


// ==================== NOTICES ====================

const notices = [
    "📢 Semester Exams start from 20th March",
    "📢 Admissions open for 2026 Batch",
    "📢 Workshop on AI – 15th February",
    "📢 Sports Day – Coming Soon",
    "📢 Placement Drive – Next Month"
];

let noticeIndex = 0;

function changeNotice() {

    const noticeEl = document.getElementById("noticeText");

    if (!noticeEl) return;

    noticeEl.innerText = notices[noticeIndex];

    noticeIndex++;

    if (noticeIndex >= notices.length) {
        noticeIndex = 0;
    }
}

setInterval(changeNotice, 3000);

// ==================== MOBILE MENU (SAFE FIX) ====================

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (!hamburger || !navLinks) return;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    hamburger.addEventListener("click", function () {

        // Only work on mobile
        if (!isMobile()) return;

        if (navLinks.classList.contains("menu-open")) {

            // Close
            navLinks.classList.remove("menu-open");
            navLinks.style.transform = "translateX(100%)";

        } else {

            // Open
            navLinks.classList.add("menu-open");
            navLinks.style.transform = "translateX(0)";

        }

    });

});
