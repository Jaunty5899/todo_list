let items = [];
const button = document.querySelector("button");
const input = document.querySelector("#to_input");

const submit_item = () => {
  const new_item = input.value;
  input.value = "";
  items.push(new_item);
  console.log({ new_item });
  console.log({ items });
};

button.addEventListener(
  "click",
  submit_item
  // console.log({ new_item });
  // console.log({ items });
);

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") submit_item();
});
