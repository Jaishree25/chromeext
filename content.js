// Function to get the website title.
function getWebsiteTitle() {
  const title = document.title;
  alert(`Website Title: ${title}`);
}

// Find all text input fields and add a button next to them.

const inputFields = document.querySelectorAll(
  'input[type="text"], input[type="search"],textarea '
);
inputFields.forEach((input) => {
  const button = document.createElement("button");
  button.textContent = "Get Title of Website";
  //button.style.padding = "10px 20px";
  button.style.textAlign = "center";
  // button.style.fontSize = "16px";
  button.style.backgroundColor = "#a679c8a3";
  button.style.color = "#fff";
  button.style.border = "none";
  //button.style.borderRadius = "10px";

  button.addEventListener("click", getWebsiteTitle);
  input.parentNode.appendChild(button);
});
