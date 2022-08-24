const addToDoButton = document.querySelector("#add-button");
const addToDoText = document.querySelector("#to-do-input");
const toDoList = document.querySelector(".list");
const toDoForm = document.querySelector("#to-do-form");

toDoForm.addEventListener("submit", function addToList(e) {
  e.preventDefault();
  const newLi = document.createElement("Li");
  newLi.innerText = addToDoText.value;
  const newButton = document.createElement("button");
  newButton.classList = "delete-button";
  newButton.innerHTML = "delete";
  toDoList.append(newLi, newButton);
  addToDoText.value = "";
});
