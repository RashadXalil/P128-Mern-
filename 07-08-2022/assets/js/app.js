// let a =Number.MAX_SAFE_INTEGER+1;
// let b = Number.MAX_SAFE_INTEGER+2;
// console.log(a==b)
// Department Employee(creat,read,update,delete)
//Employee id,firstname,lastname,salary,posiotion
//button Create
let btn = document.getElementById("add-btn");
let Employees = [];
function getValues() {
  let firstname = document.getElementById("first-name-input").value;
  let lastname = document.getElementById("last-name-input").value;
  let salary = document.getElementById("salary-input").value;
  let posiotion = document.getElementById("position-input").value;
  return { firstname, lastname, salary, posiotion };
}
var Id = 0;
class Employee {
  constructor(firstname, lastname, salary, position) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
    this.position = position;
    this.Id = Id;
    Id++;
  }
}
btn.addEventListener("click", function () {
  let values = getValues();
  let employee = new Employee(
    values.firstname,
    values.lastname,
    values.salary,
    values.posiotion
  );
  Employees.push(employee);
  renderList(Employees);
});

function renderList(list) {
  let html = "";
  let tbody = document.getElementById("t-body");

  if (list.length == 0) tbody.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const {Id,firstname,lastname,salary,position} = list[i];
    html += `
  <tr>
                <th scope="row">${Id}</th>
                <td>${firstname}</td>
                <td>${lastname}</td>
                <td>${salary}AZN</td>
                <td>${position}</td>
                <td><button id="delete-${Id}" class="btn delete-btn btn-danger">Delete</button></td>
              </tr>
  `;
    tbody.innerHTML = html;
    let deleteBtns = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", function () {
        let deleteId =
          this.parentElement.parentElement.firstElementChild.innerHTML;
        let deleteEmployee = Employees.find((x) => x.Id == deleteId); //Employee
        let deleteEmployeeIndex = Employees.indexOf(deleteEmployee);
        Employees.splice(deleteEmployeeIndex, 1);
        renderList(Employees);
      });
    }
  }
}
// Search
let searchInput = document.getElementById("searchInput");
let searchvalue = "";

searchInput.addEventListener("keyup", function () {
  searchvalue = this.value;
  let searcharr = [];
  if (searchvalue.length > 3) {
    for (let i = 0; i < Employees.length; i++) {
      if (Employees[i].firstname.includes(searchvalue)) {
        searcharr.push(Employees[i]);
      }
    }
    renderList(searcharr);
  }
});
