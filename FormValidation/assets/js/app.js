// User Classiniz olsun (username,name,surname,password,email)-constructor
// Users arrayiniz olsun
// createUser() function olsun . Users arrayine push etsin.Validation
var Id = 1;
var Users = [];
let btn = document.getElementById("btn");
function getValues() {
  let username = document.getElementById("username");
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let password = document.getElementById("password");
  let repeatpassword = document.getElementById("repeatpassword");
  let email = document.getElementById("email");
  return { username, name, surname, password, repeatpassword, email };
}
class User {
  constructor(username, name, surname, password, email) {
    this.id = Id;
    (this.username = username),
      (this.name = name),
      (this.surname = surname),
      (this.password = password),
      (this.email = email);
    Id++;
  }
}

function createUser(username, name, surname, password, repeatpassword, email) {
  for (let i = 0; i < Users.length; i++) {
    if (username == Users[i].username) {
      alert("Username already exist !");
      return;
    }
    if (email == Users[i].email) {
      alert("email already taken !");
      return;
    }
  }
  if (password != repeatpassword) {
    alert("password and repeat password didn't match");
    return;
  }
  let user = new User(username, name, surname, password, email);
  Users.push(user);
  alert("User Created");
}
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let values = getValues();
  let username = values.username.value;
  let name = values.name.value;
  let surname = values.surname.value;
  let password = values.password.value;
  let repeatpassword = values.repeatpassword.value;
  let email = values.email.value;
  createUser(username, name, surname, password, repeatpassword, email);
  renderList(Users);
});
function renderList(list) {
  html = "";
  for (let i = 0; i < list.length; i++) {
    html += `<tr>
        <th scope="row">${list[i].id}</th>
        <td>${list[i].username}</td>
        <td>${list[i].name}</td>
        <td>${list[i].surname}</td>
        <td>${list[i].password}</td>
        <td>${list[i].email}</td>
        <td><button class="btn btn-danger">Delete</button></td>
      </tr>`;
  }
  let tbody = document.getElementById("t-body")
  tbody.innerHTML = html;
}
