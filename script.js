let items = [];
const button = document.querySelector("button");
const input = document.querySelector("#to_input");
button.addEventListener("click", () => {
  const new_item = input.value;
  input.value = "";
  items.push(new_item);

  //   console.log({ new_item });
  //   console.log({ items });
});
