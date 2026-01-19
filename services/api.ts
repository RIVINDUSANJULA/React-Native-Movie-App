export const TMDB_CONFIG = {
    BASE_URL:'https://api.themoviedb.org/3',
    API_KET: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    }
}

export const fetchMovies = async({query}: {query: string}) => {
    const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch (endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok){
        throw new Error('Fail to fetch Movies', 
            // response.statusText
        );
    }

    const data = await response.json()

    return data.results;
}


// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTk4MThiZWNlZmIzNjg3YmFmMGNjOGViYjQ4YjMxZSIsIm5iZiI6MTc2ODgyODQ1Ni4zMDMsInN1YiI6IjY5NmUyZTI4MWQyZDQ5ZWZiY2RjYjdjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6A6uarZRvvuINCTh_9LkYObbzCEq0PG2OYk4m7e_YE'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));