let items = [];
const form = document.querySelector("form");
const input = document.querySelector("#to_input");

const add_item = (item) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.innerHTML = `<div class="d-flex justify-content-between">
  <span>${item}</span
  ><span class="trash trash-${items.length}"><i class="bi bi-trash3"></i></span>
</div>`;
  ul.appendChild(li);
  // party.confetti(this);
  const trash_btn = document.querySelector(`.trash-${items.length}`);
  // console.log(trash_btn);
  trash_btn.addEventListener("click", (e) => {
    console.log(e.target);
    li.remove();
    document.querySelector("#confetti").click();
  });
};

const submit_item = () => {
  const new_item = input.value.trim();
  if (new_item !== "") {
    input.value = "";
    items.push(new_item);
    // console.log({ new_item });
    // console.log({ items });
    add_item(new_item);
  }
};

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    submit_item();
  }

  // console.log({ new_item });
  // console.log({ items });
);

// input.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") submit_item();
// });
document.querySelector("#confetti").addEventListener("click", function () {
  party.confetti(this);
});
