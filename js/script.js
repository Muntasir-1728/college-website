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


const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");
const searchInput = document.getElementById("searchStudent");
const filterCourse = document.getElementById("filterCourse");

// Default Students
let students = [
    { id: "101", name: "Rahul", course: "CSE" },
    { id: "102", name: "Pooja", course: "IT" },
    { id: "103", name: "Amit", course: "ECE" },
    { id: "104", name: "Neha", course: "MECH" }
];

// Display Students
function displayStudents(list) {

    tableBody.innerHTML = "";

    list.forEach((student, index) => {

        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

// Initial Load
displayStudents(students);

// Add Student
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const id = document.getElementById("sid").value;
    const name = document.getElementById("sname").value;
    const course = document.getElementById("scourse").value;

    students.push({ id, name, course });

    displayStudents(students);

    form.reset();
});

// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents(students);
}

// Search + Filter
function filterStudents() {

    const searchText = searchInput.value.toLowerCase();
    const courseValue = filterCourse.value;

    const filtered = students.filter(student => {

        const matchName = student.name.toLowerCase().includes(searchText);
        const matchCourse = courseValue === "all" || student.course === courseValue;

        return matchName && matchCourse;
    });

    displayStudents(filtered);
}

searchInput.addEventListener("keyup", filterStudents);
filterCourse.addEventListener("change", filterStudents);




// Result Database (Demo)
const results = [
    { id: "101", name: "Rahul", course: "CSE", marks: 85, status: "Pass" },
    { id: "102", name: "Pooja", course: "IT", marks: 78, status: "Pass" },
    { id: "103", name: "Amit", course: "ECE", marks: 42, status: "Fail" },
    { id: "104", name: "Neha", course: "MECH", marks: 90, status: "Pass" }
];

// Check Result
function checkResult() {

    const id = document.getElementById("resultId").value;
    const box = document.getElementById("resultBox");

    const student = results.find(s => s.id === id);

    if (student) {

        box.innerHTML = `
            <h3>Result Found</h3>
            <p><b>Name:</b> ${student.name}</p>
            <p><b>Course:</b> ${student.course}</p>
            <p><b>Marks:</b> ${student.marks}</p>
            <p><b>Status:</b> ${student.status}</p>
        `;

    } else {

        box.innerHTML = "<p style='color:red;'>Student ID not found!</p>";
    }
}




const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const subject = document.getElementById("csubject").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {

        statusText.style.color = "red";
        statusText.innerText = "⚠️ Please fill all fields.";

        return;
    }

    statusText.style.color = "green";
    statusText.innerText = "✅ Message sent successfully! We will contact you soon.";

    form.reset();
});
