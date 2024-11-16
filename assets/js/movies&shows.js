let movies = document.querySelector(".movies-shows-btn .movies-btn");
let shows = document.querySelector(".movies-shows-btn .shows-btn");
let movie_show = document.querySelector(".movie-show");

movies.addEventListener("click", () => {
    movies.classList.add("active");
    shows.classList.remove("active");
    movie_show.innerHTML = `
     <div class="movies-item pt-5">
                        <div class="movies-categories-description">
                            <h2>Our Genres</h2>
                        </div>

                        <div class="movie-category pt-3">
                            <div class="card py-3">
                                <div class="action">
                                    <div class="container text-center">
                                        <div class="action-images row d-flex position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Action/punch.png"
                                                class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/blackpanther.png"
                                                class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/batman.png"
                                                class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/expendablesp2.png"
                                                class="col-6  img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <span>Action</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="card py-3" id="adventure">
                                <div class="adventure">
                                    <div class="container text-center">
                                        <div class="adventure-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Adventure/archer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/junglecruise.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/jack_giantslyer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/goldencompass.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <span>Adventure</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="movies-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="movies-item pt-5">
                        <div class="movies-categories-description">
                            <h2>Popular Top 10 In Genres</h2>
                        </div>
                        <div class="movie-category pt-3">
                            <div class="card card-top py-3">
                                <div class="action">
                                    <div class="container text-center">
                                        <div class="action-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Action/freedom.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/baieti_rai.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/jackie_chan.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/iron_man.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="card-body-title d-flex flex-column">
                                        <span>Top 10 In</span>
                                        <span>Action</span>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="card card-top py-3">
                                <div class="adventure">
                                    <div class="container text-center">
                                        <div class="adventure-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Adventure/archer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/junglecruise.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/jack_giantslyer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/goldencompass.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="card-body-title d-flex flex-column">
                                        <span>Top 10 In</span>
                                        <span>Adventure</span>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="movies-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="movies-item pt-5">
                        <div class="movies-categories-description col-xl-10 col-md-8 col-sm-7">
                            <h2>Trending Now</h2>
                        </div>
                        <div class="movie-category pt-3">
                            <div class="card card-trend py-3">
                                <div class="trend-movie">
                                    <div class="container text-center">
                                        <div class="trend-movie-images">
                                            <img src="./assets/img/categories/Trending_Movies/morbius.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 30min</span>
                                    </div>
                                    <div class="view-number">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>2K</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-trend py-3">
                                <div class="trend-movie">
                                    <div class="container text-center">
                                        <div class="trend-movie-images">
                                            <img src="./assets/img/categories/Trending_Movies/bhai_jaan.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 57min</span>
                                    </div>
                                    <div class="view-number">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.5K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="movies-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="movies-item pt-5">
                        <div class="movies-categories-description col-xl-10 col-md-8 col-sm-7">
                            <h2>New Releases</h2>
                        </div>
                        <div class="movie-category pt-3">
                            <div class="card card-releases py-3">
                                <div class="releases-movie">
                                    <div class="container text-center">
                                        <div class="releases-movie-images">
                                            <img src="./assets/img/categories/New_Releases_Movies/adipurush.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <span class="duration-releases">Released at 14 April 2023</span>
                                </div>
                            </div>
                            <div class="card card-releases py-3">
                                <div class="releases-movie">
                                    <div class="container text-center">
                                        <div class="releases-movie-images">
                                            <img src="./assets/img/categories/New_Releases_Movies/jackie_chan.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <span class="duration-releases">Released at 22 April 2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="movies-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>

                    <div class="movies-item pt-5">
                        <div class="movies-categories-description col-xl-10 col-md-8 col-sm-7">
                            <h2>Must - Watch Movies</h2>
                        </div>
                        <div class="movie-category pt-3">
                            <div class="card card-must py-3">
                                <div class="must-watch-movie">
                                    <div class="container text-center">
                                        <div class="must-watch-movie-images">
                                            <img src="./assets/img/categories/Must_Watch_Movies/kantara.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 30min</span>
                                    </div>
                                    <div class="view-stars d-flex align-items-center gap-1">
                                        <div class="stars d-flex gap-1">
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-half-active"></i>
                                        </div>
                                        <span>20K</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-must py-3">
                                <div class="must-watch-movie">
                                    <div class="container text-center">
                                        <div class="must-watch-movie-images">
                                            <img src="./assets/img/categories/Must_Watch_Movies/pushpa.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 57min</span>
                                    </div>
                                    <div class="view-stars d-flex align-items-center gap-1">
                                        <div class="stars d-flex gap-1">
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                        </div>
                                        <span>20K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="movies-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    `;
});
shows.addEventListener("click", () => {
    shows.classList.add("active");
    movies.classList.remove("active");
    movie_show.innerHTML = `
    <div class="shows-item pt-5">
                        <div class="movies-description-pagination">
                            <div class="row align-items-center justify-content-between">
                                <div class="shows-categories-description col-xl-10 col-md-8 col-sm-7">
                                    <h2>Our Genres</h2>
                                </div>
                                <div
                                    class="shows-categories-pagination col-xl-2 col-md-4 col-sm-5 d-flex align-items-center py-2">
                                    <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                        <li class="pev me-2"><i class="fa-solid fa-arrow-left"></i></li>
                                        <li class="list-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="next ms-2"><i class="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="show-category pt-3">
                            <div class="card py-3">
                                <div class="action">
                                    <div class="container text-center">
                                        <div class="action-images row d-flex position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Action/punch.png" class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/blackpanther.png"
                                                class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/batman.png" class="col-6  img-fluid" />
                                            <img src="./assets/img/categories/Action/expendablesp2.png"
                                                class="col-6  img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <span>Action</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="card py-3">
                                <div class="adventure">
                                    <div class="container text-center">
                                        <div class="adventure-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Adventure/archer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/junglecruise.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/jack_giantslyer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/goldencompass.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <span>Adventure</span>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="shows-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="shows-item pt-5">
                        <div class="shows-description-pagination">
                            <div class="row align-items-center justify-content-between">
                                <div class="shows-categories-description col-xl-10 col-md-8 col-sm-7">
                                    <h2>Popular Top 10 In Genres</h2>
                                </div>
                                <div
                                    class="movies-categories-pagination col-xl-2 col-md-4 col-sm-5 d-flex align-items-center py-2">
                                    <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                        <li class="pev me-2"><i class="fa-solid fa-arrow-left"></i></li>
                                        <li class="list-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="next ms-2"><i class="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="show-category pt-3">
                            <div class="card card-top py-3">
                                <div class="action">
                                    <div class="container text-center">
                                        <div class="action-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Action/wanda_vision.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/avengers_endgame.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/stranger_things.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Action/green_arrow.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="card-body-title d-flex flex-column">
                                        <span>Top 10 In</span>
                                        <span>Action</span>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                            <div class="card card-top py-3">
                                <div class="adventure">
                                    <div class="container text-center">
                                        <div class="adventure-images row d-flex flex-wrap position-relative g-1">
                                            <div class="images-cover position-absolute top-0 left-0"></div>
                                            <img src="./assets/img/categories/Adventure/archer.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/junglecruise.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/immortals.png"
                                                class="col-6 img-fluid" />
                                            <img src="./assets/img/categories/Adventure/defender_time.png"
                                                class="col-6 img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="card-body-title d-flex flex-column">
                                        <span>Top 10 In</span>
                                        <span>Adventure</span>
                                    </div>
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                        <div class="shows-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="shows-item pt-5">
                        <div class="shows-description-pagination">
                            <div class="row align-items-center justify-content-between">
                                <div class="shows-categories-description col-xl-10 col-md-8 col-sm-7">
                                    <h2>Trending Now</h2>
                                </div>
                                <div
                                    class="movies-categories-pagination col-xl-2 col-md-4 col-sm-5 d-flex align-items-center py-2">
                                    <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                        <li class="pev me-2"><i class="fa-solid fa-arrow-left"></i></li>
                                        <li class="list-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="next ms-2"><i class="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="show-category pt-3">
                            <div class="card card-trend py-3">
                                <div class="trend-movie">
                                    <div class="container text-center">
                                        <div class="trend-movie-images">
                                            <img src="./assets/img/categories/Trending_Shows/stranger_things3.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 30min</span>
                                    </div>
                                    <div class="view-number">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>2K</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-trend py-3">
                                <div class="trend-movie">
                                    <div class="container text-center">
                                        <div class="trend-movie-images">
                                            <img src="./assets/img/categories/Trending_Shows/money_heist.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 57min</span>
                                    </div>
                                    <div class="view-number">
                                        <i class="fa-solid fa-eye"></i>
                                        <span>1.5K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shows-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="shows-item pt-5">
                        <div class="shows-description-pagination">
                            <div class="row align-items-center justify-content-between">
                                <div class="shows-categories-description col-xl-10 col-md-8 col-sm-7">
                                    <h2>New Releases</h2>
                                </div>
                                <div
                                    class="movies-categories-pagination col-xl-2 col-md-4 col-sm-5 d-flex align-items-center py-2">
                                    <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                        <li class="pev me-2"><i class="fa-solid fa-arrow-left"></i></li>
                                        <li class="list-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="next ms-2"><i class="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="show-category pt-3">
                            <div class="card card-releases py-3">
                                <div class="releases-movie">
                                    <div class="container text-center">
                                        <div class="releases-movie-images">
                                            <img src="./assets/img/categories/New_Releases_Shows/high_town.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <span class="duration-releases">Released at 14 April 2023</span>
                                </div>
                            </div>
                            <div class="card card-releases py-3">
                                <div class="releases-movie">
                                    <div class="container text-center">
                                        <div class="releases-movie-images">
                                            <img src="./assets/img/categories/New_Releases_Shows/mirzapur.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body text-center">
                                    <span class="duration-releases">Released at 22 April 2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="shows-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="shows-item pt-5">
                        <div class="shows-description-pagination">
                            <div class="row align-items-center justify-content-between">
                                <div class="shows-categories-description col-xl-10 col-md-8 col-sm-7">
                                    <h2>Must - Watch Movies</h2>
                                </div>
                                <div
                                    class="movies-categories-pagination col-xl-2 col-md-4 col-sm-5 d-flex align-items-center py-2">
                                    <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                        <li class="pev me-2"><i class="fa-solid fa-arrow-left"></i></li>
                                        <li class="list-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="list-non-active"></li>
                                        <li class="next ms-2"><i class="fa-solid fa-arrow-right"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="show-category pt-3">
                            <div class="card card-must py-3">
                                <div class="must-watch-movie">
                                    <div class="container text-center">
                                        <div class="must-watch-movie-images">
                                            <img src="./assets/img/categories/Must_Watch_Shows/duranga.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 30min</span>
                                    </div>
                                    <div class="view-stars d-flex align-items-center gap-1">
                                        <div class="stars d-flex gap-1">
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-half-active"></i>
                                        </div>
                                        <span>20K</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-must py-3">
                                <div class="must-watch-movie">
                                    <div class="container text-center">
                                        <div class="must-watch-movie-images">
                                            <img src="./assets/img/categories/Must_Watch_Shows/money_heist.png"
                                                class="col-6 img-fluid w-100" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body d-flex align-items-center justify-content-between">
                                    <div class="duration-movie">
                                        <i class="fa-solid fa-clock"></i>
                                        <span>1h 57min</span>
                                    </div>
                                    <div class="view-stars d-flex align-items-center gap-1">
                                        <div class="stars d-flex gap-1">
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                            <i class="fa-solid fa-star star-active"></i>
                                        </div>
                                        <span>20K</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shows-categories-pagination-end d-none justify-content-center pt-4">
                            <ul class="d-flex list-unstyled align-items-center gap-1 mb-0">
                                <li class="list-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                                <li class="list-non-active"></li>
                            </ul>
                        </div>
                    </div>
    `;
});