const catImage = document.getElementById("cat-image");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", generateCat);

function generateCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      const imageUrl = data[0].url;
      catImage.style.backgroundImage = `url(${imageUrl})`;
    })
    .catch(error => {
      console.error("Error fetching cat image:", error);
    });
}
