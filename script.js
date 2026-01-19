const title = document.getElementById("title");
const button = document.getElementById("changeBtn");

button.addEventListener("click", () => {
  title.textContent = "You clicked the button!";
});