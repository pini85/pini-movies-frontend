import React from "react";
import { queryOptions, useQuery } from "@tanstack/react-query";

import { tmdbMovieSliderApi, tmdbNewestTodayApi } from "@/apis/tmdbApi";

import Carousel from "@/components/ui/Carousel/carousel.component";
import DisplayMovieList from "@/components/ui/DisplayMovieList/DisplayMovieList.jsx";
import MovieSlider from "@/components/ui/MovieSlider/MovieSlider.component";

import * as S from "./Home.styles";
import Button from "@/components/ui/Button/Button";
import { Link } from "react-router-dom";

export const Home = () => {
  // const { data } = useQuery("highest-rated", () => tmdbNewestTodayApi(1), {
  //   keepPreviousData: true,
  // });
  const getData = () => {
    return queryOptions({
      queryKey: ["highest-rated"],
      queryFn: () => tmdbNewestTodayApi(1),
    });
  };
  const { data } = useQuery(getData());
  console.log(data);

  // const { data: movies } = useQuery("movie-slider", tmdbMovieSliderApi);

  const getMovies = () => {
    return queryOptions({
      queryKey: ["movie-slider"],
      queryFn: tmdbMovieSliderApi,
    });
  };
  const { data: movies } = useQuery(getMovies());

  const renderMovieSliders = () => {
    return movies.map((movie) => {
      return (
        <MovieSlider key={movie.id} movie={movie} movies={movies}></MovieSlider>
      );
    });
  };

  return (
    <S.Container>
      {movies && (
        <S.CarouselContainer>
          <Carousel
            type="movieSlider"
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            fade={true}
            color="var(--primary-color)"
            activeDotColor="var(--primary-color)"
            dotsColor="white"
          >
            {renderMovieSliders()}
          </Carousel>
        </S.CarouselContainer>
      )}
      <S.Header>Movie Recommendations</S.Header>
      <S.Paragraph>Your AI movie matchmaker </S.Paragraph>
      <S.ButtonContainer>
        <Link to="/ai-recommendations">
          <Button title="AI recommendations" />
        </Link>
        <Link to="/ai-generated-movies">
          <Button title="AI generated movies" />
        </Link>
      </S.ButtonContainer>
      {data && <DisplayMovieList data={data.results} />};
    </S.Container>
  );
};

export default Home;
