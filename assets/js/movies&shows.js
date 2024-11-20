let movies_btn = document.querySelector(".movies-shows-btn .movies-btn");
let shows_btn = document.querySelector(".movies-shows-btn .shows-btn");
let movies = document.querySelector(".movie-content");
let shows = document.querySelector(".show-content");

movies_btn.addEventListener("click", () => {
    movies_btn.classList.add("active");
    shows_btn.classList.remove("active");
    movies.classList.remove("d-none");
    shows.classList.add("d-none");
});
shows_btn.addEventListener("click", () => {
    shows_btn.classList.add("active");
    movies_btn.classList.remove("active");
    shows.classList.remove("d-none");
    movies.classList.add("d-none");
});