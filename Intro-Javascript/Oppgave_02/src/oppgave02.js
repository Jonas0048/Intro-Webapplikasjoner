const users = require("./util.js");
let filteredUsers = users;

const searchInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const filterBtn = document.getElementById("filter");
const userUl = document.getElementById("users");

const updateTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

// TODO: Lag en funksjon som håndterer søket og oppdaterer grensesnittet med resultatet fra søket
searchInput.onkeyup = (evt) => {
  updateTableUI(
    (filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(evt.target.value.toLowerCase())
    ))
  );
};
// TODO: Lag en funksjon som håndterer filteret og oppdaterer grensesnittet med resultatet fra filteret
filterBtn.onclick = (evt) => {
  updateTableUI(filteredUsers.filter((user) => user.age >= ageInput.value));
};
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch)
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter)

const main = () => {
  updateTableUI(users);
};

main();
