const getFamilyMovies = async () => {
    const resp = await fetch('https://api.sampleapis.com/movies/family');
    const json = await resp.json();
    return json;
}

const disaplyFamilyMovies = async () => {
    try {
        const movies = await getFamilyMovies();
        const selectedMovies = movies.slice(0, 4);
        const images = selectedMovies.map(movie => movie.posterURL);
        const result = `
            <div class="card py-3 d-none" id="family">
                <div class="family" >
                    <div class="container text-center">
                        <div class="family-images row g-1 d-flex flex-wrap position-relative">
                            <div class="images-cover position-absolute top-0 left-0"></div>
                            ${images.map((img) => `
                                <img src="${img}" class="col-6 img-fluid"/>
                            `).join(' ')}
                        </div>
                    </div>
                </div>
                <div class="card-body text-start">
                    <span>Family</span>
                </div>
            </div>
        `;
        document.querySelector('.movie-category').innerHTML += result;
    }
    catch (error) {
        const result = `<p>Something went wrong</p>`;
        document.querySelector('.movie-category').innerHTML += result;
    }
}

const getMysteryMovies = async () => {
    const resp = await fetch('https://api.sampleapis.com/movies/mystery');
    const json = await resp.json();
    return json;
}

const disaplyMysteryMovies = async () => {
    try {
        const movies = await getMysteryMovies();
        const selectedMovies = movies.slice(1, 5);
        const images = selectedMovies.map(movie => movie.posterURL);
        const result = `
            <div class="card py-3 d-none" id="mystery">
                <div class="mystery">
                    <div class="container text-center">
                        <div class="mystery-images row g-1 d-flex flex-wrap position-relative">
                            <div class="images-cover position-absolute top-0 left-0"></div>
                            ${images.map((img) => `
                                <img src="${img}" class="col-6 img-fluid"/>
                            `).join(' ')}
                        </div>
                    </div>
                </div>
                 <div class="card-body text-start">
                    <span>Mystery</span>
                </div>
            </div>
        `;
        document.querySelector('.movie-category').innerHTML += result;
    }
    catch (error) {
        const result = `<p>Something went wrong</p>`;
        document.querySelector('.movie-category').innerHTML += result;
    }
}
const getClassicsMovies = async () => {
    const resp = await fetch('https://api.sampleapis.com/movies/classic');
    const json = await resp.json();
    return json;
}

const disaplyClassicsMovies = async () => {
    try {
        const movies = await getClassicsMovies();
        const selectedMovies = movies.slice(5, 9);
        const images = selectedMovies.map(movie => movie.posterURL);
        const result = `
            <div class="card py-3 d-none" id="classic">
                <div class="classic">
                    <div class="container text-center">
                        <div class="classic-images row g-1 d-flex flex-wrap position-relative">
                            <div class="images-cover position-absolute top-0 left-0"></div>
                            ${images.map((img) => `
                                <img src="${img}" class="col-6 img-fluid"/>
                            `).join(' ')}
                        </div>
                    </div>
                </div>
                <div class="card-body text-start">
                    <span>Classic</span>
                </div>
            </div>
        `;
        document.querySelector('.movie-category').innerHTML += result;
    }
    catch (error) {
        const result = `<p>Something went wrong</p>`;
        document.querySelector('.movie-category').innerHTML += result;
    }

}
disaplyFamilyMovies();
disaplyMysteryMovies();
disaplyClassicsMovies();

let prev_pagination = document.querySelector('.movies-categories-pagination .prev');
let prevIcon = document.querySelector('.movies-categories-pagination .prev i');
let next_pagination = document.querySelector('.movies-categories-pagination .next');
let nextIcon = document.querySelector('.movies-categories-pagination .next i');
let list_pagination = Array.from(document.querySelectorAll('.movies-categories-pagination .list'));
let index = 0;

prevIcon.style.cursor = 'auto';
nextIcon.style.cursor = 'pointer';
const updateActiveList = (direction) => {
    let activeIndex = -1;

    for (let i = 0; i < list_pagination.length; i++) {
        if (list_pagination[i].classList.contains('list-active')) {
            activeIndex = i;
            break;
        }
    }

    if (direction === 'prev' && activeIndex > 0) {
        list_pagination[activeIndex].classList.remove('list-active');
        list_pagination[activeIndex].classList.add('list-non-active');
        list_pagination[activeIndex - 1].classList.remove('list-non-active');
        list_pagination[activeIndex - 1].classList.add('list-active');
    } else if (direction === 'next' && activeIndex < list_pagination.length - 1) {
        list_pagination[activeIndex].classList.remove('list-active');
        list_pagination[activeIndex].classList.add('list-non-active');
        list_pagination[activeIndex + 1].classList.remove('list-non-active');
        list_pagination[activeIndex + 1].classList.add('list-active');
    }
};

const updateCursor = () => {
    let activeIndex = -1;
    for (let i = 0; i < list_pagination.length; i++) {
        if (list_pagination[i].classList.contains('list-active')) {
            activeIndex = i;
            break;
        }
    }

    if (activeIndex === 0) {
        prevIcon.style.cursor = 'auto';
        nextIcon.style.cursor = 'pointer';
    } else if (activeIndex === list_pagination.length - 1) {
        prevIcon.style.cursor = 'pointer';
        nextIcon.style.cursor = 'auto';
    } else {
        prevIcon.style.cursor = 'pointer';
        nextIcon.style.cursor = 'pointer';
    }
};


prev_pagination.addEventListener('click', () => {
    updateActiveList('prev');
    updateCursor();
});


next_pagination.addEventListener('click', () => {
    updateActiveList('next');
    updateCursor();
});

prev_pagination.addEventListener('click', () => {
    if (index == 0) {
        return;
    }
if (list_pagination[2].classList.contains('list-active')) {
   
    document.getElementById('comedy').classList.remove('d-none');
    document.getElementById('classic').classList.add('d-none');
    index--;
}
else if (list_pagination[1].classList.contains('list-active')) {
    document.getElementById('adventure').classList.remove('d-none');
    document.getElementById('mystery').classList.add('d-none');
    index--;
}
else if (list_pagination[0].classList.contains('list-active')) {
    document.getElementById('action').classList.remove('d-none');
    document.getElementById('family').classList.add('d-none');
    index--;
}
}

);

next_pagination.addEventListener('click', () => {
if(index == 3) {
    return;
}
    if (list_pagination[1].classList.contains('list-active')) {
        document.getElementById('action').classList.add('d-none');
        document.getElementById('family').classList.remove('d-none');
        index++;
    }
    else if (list_pagination[2].classList.contains('list-active')) {
        document.getElementById('adventure').classList.add('d-none');
        document.getElementById('mystery').classList.remove('d-none');
        index++;
    }
    else if (list_pagination[3].classList.contains('list-active')) {
        document.getElementById('comedy').classList.add('d-none');
        document.getElementById('classic').classList.remove('d-none');
        index++;
    }
});

let prev_pagination_end = document.querySelector('.movies-categories-pagination-end .prev');
let prevIcon_end = document.querySelector('.movies-categories-pagination-end .prev i');
let next_pagination_end = document.querySelector('.movies-categories-pagination-end .next');
let nextIcon_end = document.querySelector('.movies-categories-pagination-end .next i');
let list_pagination_end = Array.from(document.querySelectorAll('.movies-categories-pagination-end .list'));
let index_end = 0;
const updateActiveList_end = (direction) => {
    let activeIndex = -1;

    for (let i = 0; i < list_pagination_end.length; i++) {
        if (list_pagination_end[i].classList.contains('list-active')) {
            activeIndex = i;
            break;
        }
    }

    if (direction === 'prev' && activeIndex > 0) {
        list_pagination_end[activeIndex].classList.remove('list-active');
        list_pagination_end[activeIndex].classList.add('list-non-active');
        list_pagination_end[activeIndex - 1].classList.remove('list-non-active');
        list_pagination_end[activeIndex - 1].classList.add('list-active');
    } else if (direction === 'next' && activeIndex < list_pagination_end.length - 1) {
        list_pagination_end[activeIndex].classList.remove('list-active');
        list_pagination_end[activeIndex].classList.add('list-non-active');
        list_pagination_end[activeIndex + 1].classList.remove('list-non-active');
        list_pagination_end[activeIndex + 1].classList.add('list-active');
    }
};

const updateCursor_end = () => {
    let activeIndex = -1;
    for (let i = 0; i < list_pagination_end.length; i++) {
        if (list_pagination_end[i].classList.contains('list-active')) {
            activeIndex = i;
            break;
        }
    }

    if (activeIndex === 0) {
        prevIcon_end.style.cursor = 'auto';
        nextIcon_end.style.cursor = 'pointer';
    } else if (activeIndex === list_pagination_end.length - 1) {
        prevIcon_end.style.cursor = 'pointer';
        nextIcon_end.style.cursor = 'auto';
    } else {
        prevIcon_end.style.cursor = 'pointer';
        nextIcon_end.style.cursor = 'pointer';
    }
};


prev_pagination_end.addEventListener('click', () => {
    updateActiveList_end('prev');
    updateCursor_end();
});


next_pagination_end.addEventListener('click', () => {
    updateActiveList_end('next');
    updateCursor_end();
});

prev_pagination_end.addEventListener('click', () => {
    if(index_end == 0) {
        return;
    }
    if (list_pagination_end[2].classList.contains('list-active')) {
        document.getElementById('comedy').classList.remove('d-none');
        document.getElementById('classic').classList.add('d-none');
        index_end--;
    }
    else if (list_pagination_end[1].classList.contains('list-active')) {
        document.getElementById('adventure').classList.remove('d-none');
        document.getElementById('mystery').classList.add('d-none');
        index_end--;
    }
    else if (list_pagination_end[0].classList.contains('list-active')) {
        document.getElementById('action').classList.remove('d-none');
        document.getElementById('family').classList.add('d-none');
        index_end--;
    }
}
);

next_pagination_end.addEventListener('click', () => {
    if(index_end == 3) {
        return;
    }
    if (list_pagination_end[1].classList.contains('list-active')) {
        document.getElementById('action').classList.add('d-none');
        document.getElementById('family').classList.remove('d-none');
        index_end++;
    }
    else if (list_pagination_end[2].classList.contains('list-active')) {
        document.getElementById('adventure').classList.add('d-none');
        document.getElementById('mystery').classList.remove('d-none');
        index_end++;
    }
    else if (list_pagination_end[3].classList.contains('list-active')) {
        document.getElementById('comedy').classList.add('d-none');
        document.getElementById('classic').classList.remove('d-none');
        index_end++;
    }
}
);

const mediaQuery_prev = window.matchMedia('(max-width: 480px)');
if (mediaQuery_prev.matches) {
    prev_pagination_end.addEventListener('click', () => {

        if (list_pagination_end[2].classList.contains('list-active')) {
            document.getElementById('classic').classList.add('d-none');
            document.getElementById('mystery').classList.remove('d-none');
            document.getElementById('family').classList.remove('d-none');
        }
        else if (list_pagination_end[1].classList.contains('list-active')) {
            document.getElementById('adventure').classList.remove('d-none');
            document.getElementById('mystery').classList.add('d-none');
        }
        else if (list_pagination_end[0].classList.contains('list-active')) {
            document.getElementById('action').classList.remove('d-none');
            document.getElementById('family').classList.add('d-none');
        }
    }
    );
}



const mediaQuery_next = window.matchMedia('(max-width: 480px)');
if (mediaQuery_next.matches) {
    next_pagination_end.addEventListener('click', () => {
        if (list_pagination_end[1].classList.contains('list-active')) {
            document.getElementById('action').classList.add('d-none');
            document.getElementById('family').classList.remove('d-none');
        }
        else if (list_pagination_end[2].classList.contains('list-active')) {
            document.getElementById('adventure').classList.add('d-none');
            document.getElementById('mystery').classList.remove('d-none');
        }
        else if (list_pagination_end[3].classList.contains('list-active')) {
            document.getElementById('classic').classList.remove('d-none');
            document.getElementById('family').classList.add('d-none');
        }
    }
    );
}



let show = document.querySelectorAll('.question i');
let answer = document.querySelectorAll('.question p');

show.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('fa-plus');
        item.classList.toggle('fa-minus');
        item.classList.toggle('align-self-start');
        answer[index].classList.toggle('d-none');
    })
})

let monthly = document.querySelector('.choose-plan-duration .monthly');
let yearly = document.querySelector('.choose-plan-duration .yearly');
let price = document.querySelectorAll(".price");



monthly.addEventListener('click', () => {
    yearly.classList.remove('active');
    monthly.classList.add('active');
    price[0].innerHTML = `$9.99<span class = "duration">/month</span>`;
    price[1].innerHTML = `$12.99<span class = "duration">/month</span>`;
    price[2].innerHTML = `$14.99<span class = "duration">/month</span>`;
});

yearly.addEventListener('click', () => {
    monthly.classList.remove('active');
    yearly.classList.add('active');
    price[0].innerHTML = `$119.99<span class = "duration">/year</span>`;
    price[1].innerHTML = `$155.99<span class = "duration">/year</span>`;
    price[2].innerHTML = `$179.99<span class = "duration">/year</span>`;
});

