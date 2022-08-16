// get the employee list
var employees = document.getElementById("employeeList");
var inputPlace;

// open the employee list
function openModal() {
    employees.style.display = "flex";
    employees.style.background = "rgba(11, 11, 11, 0.56)";
}

// find where the openModal() function was open from
function findLocation(id) {
    inputPlace = document.getElementById(id);
    return inputPlace;
}


// close the employee list when clicking anywhere outside of the modal window
window.onclick = function (event) {
    if (event.target == employees) {
        employees.style.display = "none";
    }
}

// insert sender or executor name into the field and close the employees list
function chooseSender(id) {
    inputPlace.value = document.getElementById(id).textContent.trim();
    employees.style.display = "none";
}