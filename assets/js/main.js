let grid = document.querySelector(".picsum_grid");
let refreshBtn = document.querySelector("#refresh");
let number = 1;

let fetchFunction = () => {
  fetch(`https://picsum.photos/v2/list?page=${number}&limit=100`)
    .then((response) => response.json())
    .then((picsumData) => {
      let result = picsumData
        .map((singleImg) => {
          return `<div> 
        <img src="${singleImg.download_url}" alt="Picsum Img">
        <h2>${singleImg.author} </h2>
        <a href="${singleImg.url}">See more</a>
        </div>
        `;
        })
        .join("");
      grid.innerHTML = result;
    })
    .catch((error) => console.log("ein Fehler ist aufgetreten", error));
};
fetchFunction();

refreshBtn.addEventListener("click", () => {
  number++;
  fetchFunction();
});
