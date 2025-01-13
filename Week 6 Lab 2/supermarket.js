"use strict";

const supermarketProducts = [
  { name: "cucumbers", category: "Produce", price: 0.72, isInStock: true },
  { name: "cookie cake", category: "Bakery", price: 9.98, isInStock: false },
  { name: "shrimp", category: "Seafood", price: 12.94, isInStock: true },
  { name: "fuji apples", category: "Produce", price: 4.12, isInStock: true },
];

function displayBands(arrayOfBands) {
  for (let i = 0; i < arrayOfBands.length; i++) {
    let inStock = "";
    const musicBand = arrayOfBands[i];
    if (product.isInStock) {
      isInStock = "In Stock";
    } else {
      isInStock = "Not In Stock";
    }

    let displayOfBands = `
<div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">Bands </h5>
    <p class="card-text">${musicBand.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${musicBand.genre}</li>
    <li class="list-group-item">${musicBand.formedYear}</li>
    <li class="list-group-item">${active}</li>
  </ul>
</div>`;
    document.getElementById("favoriteBands").innerHTML += displayOfBands;
  }
}
displayBands(musicBands);
