var counter = 0;
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("inputField");

addBtn.addEventListener("click", () => {
  let container = document.getElementById("toDoCon");
  container.appendChild(createCheckBox(counter));
  container.appendChild(createLabel(input, counter));
  container.appendChild(document.createElement("br"));
  counter++;
});

function createCheckBox(counter) {
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
