var counter = 0;
const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const input = document.getElementById("inputField");
const container = document.getElementById("toDoCon");

addBtn.addEventListener("click", () => {
  container.appendChild(createCheckBox(counter));
  container.appendChild(createLabel(input, counter));
  container.appendChild(document.createElement("br"));
  counter++;
});
resetBtn.addEventListener("click", () => {
  container.innerHTML = "";
});

function createCheckBox(counter) {
  if (input.value == "") {
    return;
  }
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox" + counter);
  return checkbox;
}

function createLabel(input, counter) {
  let label = document.createElement("label");
  label.setAttribute("for", "checkbox" + counter);
  let text = document.createTextNode(input.value);
  label.appendChild(text);
  return label;
}
