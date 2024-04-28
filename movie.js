const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
 
searchInputEl.addEventListener('focus', function() { 
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '영화제목 검색');
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
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));