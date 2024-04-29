const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
 
searchInputEl.addEventListener('focus', function() { 
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '영화제목을 검색해보세요');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzVkYjYzMTZhNDMzYTU3ZjY5ODBmN2FkYTcxYTczMiIsInN1YiI6IjY2MmQwOGNlYTgwNjczMDEyMmU4MzQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XG5lDAMMqpMSXOqvhyHp3_BEUAHKeRxTllhvKAJ-hF4'
    }
  };

  const movieCards = document.querySelector('.movieCards')

  movieCards.innerHTML = '';

    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(data => {
        const content = document.getElementById('content');
        console.log(data);

            const cardArray = data.results
            cardArray.forEach(card => {
              movieCards.innerHTML += `
              <div id="content" class="container">                  
              <div class="card">
                    <img src="https://image.tmdb.org/t/p/w300/${card.poster_path}" class="radius_img" alt="영화이미지" />
                    <h3 class="title">${card.title}</h3>
                    <p class="overview">${card.overview}</p>
                    <p class="rating">${(card.vote_average).toFixed(1)}</p>
                  </div>
                </div>`
             });
            
    });
    


