import api from "./api";

export const currentUser = async () => {
  const data = await api.get("/api/auth/current_user");
  return data.data;
};
export const saveMovie = (movie: any) => {
  return api.post(`/api/movies/add`, { movie });
};

export const getSavedMovies = async () => {
  const data = await api.get(`/api/movies`);
  return data.data;
};

export const removeSavedMovie = (movieId: string) => {
  return api.delete(`/api/movies/${movieId}`);
};

export const saveQuery = async (userId: string, query: string) => {
  return await api.post(`/api/${userId}/movieQueries/add`, { query });
};

export const getSaveQuery = async (userId: string) => {
  return await api.get(`/api/${userId}/movieQueries`);
};

export const removeSaveQuery = async (userId: string, queryId: string) => {
  return await api.delete(`/api/${userId}/movieQueries/${queryId}`);
};

export const getTorrents = async (name: string) => {
  return await api.get(`/api/torrents/${name}`);
};
export const watchTorrent = async (magnet: string) => {
  const link = encodeURIComponent(magnet.trim());

  return await api.get(`/api/watch?torrent=${link}`);
};

export const getMovieCategories = async () => {
  return await api.get(`/api/ai/movieCategories`);
};
export const getNewCategory = async () => {
  return await api.post(`/api/ai/generateCategory`);
};
export const getMoviesByCategory = async (categoryName: string) => {
  return await api.get(`/api/ai/moviesByCategory/${categoryName}`);
};

export const getNewMoviesByCategory = async (
  categoryName: string,
  numberOfMovies = 14
) => {
  return await api.post("/api/ai/generateMoviesByCategory", {
    categoryName,
    numberOfMovies,
  });
};
export const getNewOwnCategory = async (input: string) => {
  return await api.post("/api/ai/generateMovieCategoryByInput", {
    input,
  });
};
