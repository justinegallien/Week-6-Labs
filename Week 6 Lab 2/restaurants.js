"use strict";

const localRestaurants = [
  {
    name: "WingStop",
    cuisine: "Chicken Wings",
    location: "Carencro, LA",
    rating: 3.5,
  },
  {
    name: "Pedro's",
    cuisine: "Mexican",
    location: "Opelousas, LA",
    rating: 4.0,
  },
  {
    name: "Ruth's Chris Steakhouse",
    cuisine: "Steakhouse",
    location: "Lafayette, La",
    rating: 4.6,
  },
  {
    name: "LT's Seafood & Steakhouse",
    cuisine: "Seafood/Steakhouse",
    location: "Broussard, LA",
    rating: 4.4,
  },
];

function displayRestaurants(arrayOfProducts) {
  for (let i = 0; i < arrayOfProducts.length; i++) {
      const localRestaurant = arrayOfProducts[i];

    let displayOfRestaurants = `
<div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">${localRestaurant.name}</h5>
    <p class="card-text">${localRestaurant.cuisine}</p>
  </div>
  <ul class="list-group list-group-flush">
    
    <li class="list-group-item">${localRestaurant.location}</li>
    <li class="list-group-item">${localRestaurant.rating}</li>
  </ul>
</div>`;
    document.getElementById("favoriteRestaurants").innerHTML +=
      displayOfRestaurants;
  }
}
displayRestaurants(localRestaurants);
