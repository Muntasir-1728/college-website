const searchInput = document.getElementById("searchFaculty");
const deptFilter = document.getElementById("deptFilter");
const facultyCards = document.querySelectorAll(".faculty-card");

// Search Function
searchInput.addEventListener("keyup", function () {
    filterFaculty();
});

// Filter Function
deptFilter.addEventListener("change", function () {
    filterFaculty();
});

function filterFaculty() {

    const searchText = searchInput.value.toLowerCase();
    const deptValue = deptFilter.value;

    facultyCards.forEach(card => {

        const name = card.querySelector("h3").innerText.toLowerCase();
        const dept = card.getAttribute("data-dept");

        let matchSearch = name.includes(searchText);
        let matchDept = deptValue === "all" || dept === deptValue;

        if (matchSearch && matchDept) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}
