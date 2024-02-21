let grid = document.querySelector(".picsum_grid");

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((picsumData) => {
    console.log(picsumData);

    picsumData.forEach((singleImg) => {
      //   console.log(singleImg.id);
      grid.innerHTML += `<div> 
      <img src="${singleImg.download_url}" alt="Picsum Img">
      <h2>${singleImg.author} </h2>
      <a href="${singleImg.url}">See more</a>
      `;
    });
  })
  .catch((error) => console.log("ein Fehler ist aufgetreten", error));
