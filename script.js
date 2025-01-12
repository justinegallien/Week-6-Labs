"use strict";

let numbers = [100, 456, 98, 45, 43, 73];
let allNumbersUl = document.getElementById("allNumbers");

for (let i = 0; i < numbers.length; i++) {
  allNumbersUl.innerHTML += `<li> ${numbers[i]}</li>`;
}
let evenNumbersUL = document.getElementById("evenNumbers");

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbersUL.innerHTML += `<li> ${numbers[i]}</li>`;
  }
}

let blogPost1 = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
];

let blogPost2 = [
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
];

for (let i = 0; i < blogPost1.length; i++) {
  let card1 = `
<div class="card" style="width: 18rem;">
  <div class="card-header">${blogPost1[i].title}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${blogPost1[i].author}</li>
    <li class="list-group-item">${blogPost1[i].date}</li>
  </ul>
</div>`;

  let blogPost1Card1 = document.getElementById("blogPost1Card1");
  blogPost1Card1.innerHTML = card1;
}

for (let i = 0; i < blogPost2.length; i++) {
  let card2 = `
<div class="card" style="width: 18rem;">
  <div class="card-header">${blogPost2[i].title}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${blogPost2[i].author}</li>
    <li class="list-group-item">${blogPost2[i].date}</li>
  </ul>
</div>`;

  let blogPost2Card2 = document.getElementById("blogPost2Card2");
  blogPost2Card2.innerHTML = card2;
}
//firstBlogPostOnly

let firstBlogPost = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
];
for (let i = 0; i < firstBlogPost.length; i++) {
  let BlogPost1Only = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${firstBlogPost[i].title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${firstBlogPost[i].date}</h6>
    <p class="card-text">
      ${firstBlogPost[i].author}
    </p>
  
  </div>
</div>`;
  let firstBlogPostOnly = document.getElementById("BlogPost1Only");
  firstBlogPostOnly.innerHTML = BlogPost1Only;
}
//Add 5 more Posts

let blogPosts = [
  { id: 1, title: "Blog Post 1", author: "Author A", date: "2023-11-15" },
  { id: 2, title: "Blog Post 2", author: "Author B", date: "2023-12-01" },
  { id: 3, title: "Blog Post 3", author: "Author C", date: "2024-01-12" },
  { id: 4, title: "Blog Post 4", author: "Author D", date: "2024-07-03" },
  { id: 5, title: "Blog Post 5", author: "Author E", date: "2024-10-12" },
];
for (let i = 0; i < blogPosts.length; i++) {
  let card3 = `
  <div class="card-header">${blogPosts[i].title}</div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>${blogPosts[i].author}</p>
      <footer class="blockquote-footer">
        ${blogPosts[i].date}
      </footer>
    </blockquote>
  </div>
`;
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = card3;

  let blogPost1Card3 = document.getElementById("blogPost1Card3");
  blogPost1Card3.append(div);
}
