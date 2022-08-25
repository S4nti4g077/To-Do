const addToDoButton = document.querySelector("#add-button");
const addToDoText = document.querySelector("#to-do-input");
const toDoList = document.querySelector(".list");
const toDoForm = document.querySelector("#to-do-form");

function newButton(where) {
  const newButton = document.createElement("button");
  newButton.classList = "delete-button";
  newButton.innerHTML = "DONE!";
  where.append(newButton);
  newButton.addEventListener("click", function () {
    console.log("usuwam");
    where.remove();
  });
}
function newLi() {
  const newLi = document.createElement("Li");
  newLi.innerText = addToDoText.value;
  toDoList.append(newLi);
  newButton(newLi);
  addToDoText.value = "";
}

toDoForm.addEventListener("submit", function addToList(e) {
  e.preventDefault();
  if (addToDoText.value === "") {
    alert('please fill "to do"');
    return;
  } else {
    newLi();
  }
});
