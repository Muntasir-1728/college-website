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
