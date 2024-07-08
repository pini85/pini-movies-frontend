import React from "react";
import { useQuery } from "react-query";
import { tmdbMovieSliderApi } from "../../apis/tmdbApi";
import { tmdbNewestTodayApi } from "apis/tmdbApi";

import Carousel from "components/Carousel/carousel.component";
import DisplayMovieList from "components/DisplayMovieList/DisplayMovieList.jsx";
import MovieSlider from "components/MovieSlider/MovieSlider.component";

import * as S from "./Home.styles";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery("highest-rated", () => tmdbNewestTodayApi(1), {
    keepPreviousData: true,
  });

  const { data: movies } = useQuery("movie-slider", tmdbMovieSliderApi);

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
