// Welcome Alert
// window.onload = function () {
//     alert("Welcome to My College Management System!");
// };

// Auto Update Stats
let students = 2500;
let faculty = 150;
let departments = 25;
let years = 10;

function updateStats() {
    document.getElementById("students").innerText = students + "+";
    document.getElementById("faculty").innerText = faculty + "+";
    document.getElementById("departments").innerText = departments + "+";
    document.getElementById("years").innerText = years + "+";
}

updateStats();

// Dynamic Notices
const notices = [
    "📢 Semester Exams start from 20th March",
    "📢 Admissions open for 2026 Batch",
    "📢 Workshop on AI – 15th February",
    "📢 Sports Day – Coming Soon",
    "📢 Placement Drive – Next Month"
];

let noticeIndex = 0;

function changeNotice() {
    document.getElementById("noticeText").innerText = notices[noticeIndex];

    noticeIndex++;

    if (noticeIndex >= notices.length) {
        noticeIndex = 0;
    }
}

setInterval(changeNotice, 3000);
