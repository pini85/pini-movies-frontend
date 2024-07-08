import { dateMonthsBack } from '../utlis/date';

import { filterMovies } from '../utlis/filterMovies';
const ApiKey = '3e296e6f6a1b142633468c58b584ab9b';

export const tmdbApiDiscover = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&total_results=1&page=1`
  );
  const data = await response.json();

  return data.results.slice(0, 1);
};

export const tmdbSearchApi = async (query: string, page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );

  const data = await response.json();

  return data;
};
export const tmdbMovieSliderApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&vote_average.gte=7&&vote_count.gte=1000&include_adult=false&include_video=false&total_results=1&page=1`
  );
  const data = await response.json();
  return data.results.slice(0, 5);

  // const shuffled = shuffle(data.results);

  // return shuffled.slice(0, 5);
};
export const tmdbQueryApi = async (query: string, page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  const data = await response.json();
  return data;
};
export const tmdbIdApi = async (id: number) => {
  const response = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();

  return data;
};

export const tmdbTrailersApi = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3e296e6f6a1b142633468c58b584ab9b&language=en-US`
  );
  const data = await response.json();

  const sliced = data.results.length > 3 ? data.results.slice(0, 3) : data.results;

  return sliced;
};

export const tmdbLatestApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=en-US &release_date.gte=2019&page=1`
  );
  const data = await response.json();

  return data;
};

export const tmdbNewestTodayApi = async (page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&region=US&&language=en-US&sort_by=release_date.desc&sort_by=vote_count.desc&primary_release_date.gte=${dateMonthsBack(
      2
    )}&primary_release_date.lte=${dateMonthsBack(1)}&page=${page}`
  );
  const data = await response.json();

  return data;
};

export const tmdbHighestRatedApi = async (page: number) => {
  const response = await fetch(`
  https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=vote_average.desc&vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=${page}`);
  const data = await response.json();
  return data;
};

export const tmdbActorsApi = async (name: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  const data = await response.json();
  return data;
};

export const tmdbMovieCreditsApi = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`
  );
  const data = await response.json();

  return data;
};

export const tmdbGenresApi = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();

  return data.genres;
};

export const tmdbCastId = async (query: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${ApiKey}&query=${query}`
  );
  const data = await response.json();

  return data;
};

export const tmdbCastInfoApi = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${ApiKey}&language=en-US`
  );

  const data = await response.json();
  return data;
};

export const tmdbAdvancedMoviesApi = async (query: string, page: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&include_adult=false&include_video=false&${query}&page=${page}`
  );

  const data = await response.json();

  const filtered = await filterMovies(data);

  return filtered;
};

export const tmdbCastMoviesApi = async (id: string, page: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_cast=${id}`
  );

  const data = await response.json();
  return data;
};

export const tmdbMovieReviewsApi = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id} /reviews?api_key=${ApiKey}&language=en-US&page=1`
  );

  const data = response.json();

  return data;
};

export const tmdbMoviesById = async (id: number) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}&language=en-US`
  );
  const data = await response.json();
  return data;
};
