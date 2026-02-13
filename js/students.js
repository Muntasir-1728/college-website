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
