"use strict";

const supermarketProducts = [
  { name: "cucumbers", category: "Produce", price: 0.72, isInStock: true },
  { name: "cookie cake", category: "Bakery", price: 9.98, isInStock: false },
  { name: "shrimp", category: "Seafood", price: 12.94, isInStock: true },
  { name: "fuji apples", category: "Produce", price: 4.12, isInStock: true },
];

function displayProducts(arrayOfProducts) {
  for (let i = 0; i < arrayOfProducts.length; i++) {
    let isInStock = "";
    const supermarketProduct = arrayOfProducts[i];
    if (supermarketProduct.isInStock) {
      isInStock = "In Stock";
    } else {
      isInStock = "Not In Stock";
    }

    let displayOfProducts = `
<div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">Supermarket Products </h5>
    <p class="card-text">${supermarketProduct.name}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${supermarketProduct.category}</li>
    <li class="list-group-item">${supermarketProduct.price}</li>
    <li class="list-group-item">${isInStock}</li>
  </ul>
</div>`;
    document.getElementById("productAvailability").innerHTML +=
      displayOfProducts;
  }
}
displayProducts(supermarketProducts);
