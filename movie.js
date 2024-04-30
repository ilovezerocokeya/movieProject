//API 불러오기

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzVkYjYzMTZhNDMzYTU3ZjY5ODBmN2FkYTcxYTczMiIsInN1YiI6IjY2MmQwOGNlYTgwNjczMDEyMmU4MzQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XG5lDAMMqpMSXOqvhyHp3_BEUAHKeRxTllhvKAJ-hF4",
  },
};

//불러온 API 화면에 뿌려주기
const movieCards = document.querySelector(".movieCards");

movieCards.innerHTML = "";

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((data) => {
    const content = document.getElementById("content");
    console.log(content);

    const cardArray = data.results;
  //초기화작업
  // const docFragment = document.createDocumentFragment();
  cardArray.forEach((card) => {
    movieCards.innerHTML += `           
              <div class="card">
                    <img src="https://image.tmdb.org/t/p/w300/${
                      card.poster_path
                    }" class="radius_img" alt="영화이미지" />
                    <h3 class="title">${card.title}</h3>
                    <p class="overview">${card.overview}</p>
                    <p class="rating">${card.vote_average.toFixed(1)}</p>
                </div>`;
  });
});

//검색창
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search-box");

searchEl.addEventListener("submit", function () {
  const search = searchInput.value;
  alert(search);

});


  //영화 리스트 검색어로 필터링
const inner = document.querySelector(".inner");

inner.innerHTML = card.map((card) => 
`  <div class="card">
<img src="https://image.tmdb.org/t/p/w300/${
  card.poster_path
}" class="radius_img" alt="영화이미지" />
<h3 class="title">${card.title}</h3>
<p class="overview">${card.overview}</p>
<p class="rating">${card.vote_average.toFixed(1)}</p>
</div>;
`).join("");
const input = document.querySelector(".search-box");
input.addEventListener("keyup" , (e) => {
  const keyword = e.target.value;
  const filteredMovie = searchFilter(card, keyword);
  inner.innerHTML = filteredMovie.map 
});

