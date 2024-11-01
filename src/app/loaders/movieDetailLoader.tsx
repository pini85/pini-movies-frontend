// loaders.ts
import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs, defer } from "react-router-dom";

import {
  tmdbIdApi,
  tmdbMovieCreditsApi,
  tmdbMovieReviewsApi,
} from "@/apis/tmdbApi";
import omdbApi from "@/apis/omdbApi";
import modifyMovieData from "@/utlis/modifyMovieData";

interface TmdbMovie {
  id: number;
  imdb_id: string | null;
  // Add other properties as needed
}

export const movieDetailLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params as { id: string };
    if (!id) throw new Error("Movie ID is required");
    const movieId = Number(id);

    const tmdbQuery = {
      queryKey: ["tmdb-movie", movieId],
      queryFn: () => tmdbIdApi(movieId) as Promise<TmdbMovie>,
    };
    const creditsQuery = {
      queryKey: ["credits-movie", movieId],
      queryFn: () => tmdbMovieCreditsApi(movieId),
    };
    const reviewsQuery = {
      queryKey: ["reviews-movie", movieId],
      queryFn: () => tmdbMovieReviewsApi(movieId),
    };

    const [tmdbData, credits, reviews] = await Promise.all([
      queryClient.getQueryData(tmdbQuery.queryKey) ??
        queryClient.fetchQuery(tmdbQuery),
      queryClient.getQueryData(creditsQuery.queryKey) ??
        queryClient.fetchQuery(creditsQuery),
      queryClient.getQueryData(reviewsQuery.queryKey) ??
        queryClient.fetchQuery(reviewsQuery),
    ]);
    const omdbDataPromise = (tmdbData as TmdbMovie).imdb_id
      ? (async () => {
          const omdbQuery = {
            queryKey: ["omdb-movie", (tmdbData as TmdbMovie).imdb_id],
            queryFn: () => omdbApi((tmdbData as TmdbMovie).imdb_id!),
          };
          return (
            queryClient.getQueryData(omdbQuery.queryKey) ??
            (await queryClient.fetchQuery(omdbQuery))
          );
        })()
      : Promise.resolve(null);

    // Process all data and return using defer
    const movieDataPromise = omdbDataPromise.then((omdbData) =>
      modifyMovieData(tmdbData, omdbData, credits, reviews)
    );

    return defer({
      movieData: movieDataPromise,
    });
  };

// let omdbData = null;
// if ((tmdbData as TmdbMovie).imdb_id) {
//   const omdbQuery = {
//     queryKey: ["omdb-movie", (tmdbData as TmdbMovie).imdb_id],
//     queryFn: () => omdbApi((tmdbData as TmdbMovie).imdb_id!),
//   };
//   omdbData =
//     queryClient.getQueryData(omdbQuery.queryKey) ??
//     (await queryClient.fetchQuery(omdbQuery));
// }

// const movieData = await modifyMovieData(
//   tmdbData,
//   omdbData,
//   credits,
//   reviews
// );

// return movieData;
