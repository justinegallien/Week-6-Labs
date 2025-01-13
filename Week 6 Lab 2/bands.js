"use strict";

const musicBands = [
  { name: "Outkast", genre: "Hip Hop", formedYear: 1992, active: false },
  {
    name: "The Temptations",
    genre: "R&B",
    formedYear: 1960,
    active: false,
  },
  { name: "Backstreet Boys", genre: "Pop", formedYear: 1993, active: true },
  { name: "TLC", genre: "R&B", formedYear: 1990, active: true },
];

function displayBands(arrayOfBands) {
  for (let i = 0; i < arrayOfBands.length; i++) {
    let active = "";
    const musicBand = arrayOfBands[i];
    if (musicBand.active) {
      active = "Active";
    } else {
      active = "Not Active";
    }

    let displayOfBands = `
<div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">Band: </h5>
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
