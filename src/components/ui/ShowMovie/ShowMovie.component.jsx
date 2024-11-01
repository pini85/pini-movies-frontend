// pages/ShowMovie/ShowMovie.component.tsx
import React from "react";
import { useLoaderData, Await, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowMovieInfo from "@/components/ui/ShowMovieInfo/ShowMovieInfo.component";
import Button from "@/components/ui/Button/Button";
import MovieCast from "@/components/ui/MovieCast/MovieCast.component";
import Trailer from "@/components/ui/Trailer/Trailer.component";
import Reviews from "@/components/ui/Reviews/Review.component";
import LoadingScreen from "@/components/ui/LoadingScreen/LoadingScreen.component";
import SaveMovie from "@/components/ui/SaveMovie/SaveMovie.component";
import NoInfo from "@/components/ui/NoInfo/NoInfo.component";
import * as S from "./ShowMovie.styles";
import useIsSavedMovie from "@/hooks/useIsSavedMovie.hooks";
import { Suspense } from "react";

export const ShowMovie = () => {
  const userId = useSelector((state) => state.user?.user?._id);
  const navigate = useNavigate();
  const { id } = useParams();

  const { movieData } = useLoaderData();
  const { isSaved } = useIsSavedMovie(userId, id);

  const handleWatch = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Await resolve={movieData} errorElement={<NoInfo />}>
        {(data) => (
          <S.Container
            color1={data.colors.darkMuted}
            color2={data.colors.muted}
          >
            <Trailer colors={data.colors} poster={data.poster} id={id} />
            <S.MovieCard color={data.colors.lightVibrant}>
              {userId && (
                <SaveMovie movie={data} isSaved={isSaved} id={Number(id)} />
              )}
              <S.HeroContainer poster={data.backdrop}>
                <S.TopContainer>
                  <ShowMovieInfo data={data} />
                </S.TopContainer>
              </S.HeroContainer>
              <S.BottomContainer>
                <S.LeftSide>
                  <S.PlotContainer
                    tagline={data.tagLine}
                    color={data.colors.darkVibrant}
                  >
                    {data.tagLine && (
                      <S.TagLineContainer>
                        <span>&ldquo;</span>
                        {data.tagLine}
                        <span>&rdquo;</span>
                      </S.TagLineContainer>
                    )}
                    <p>{data.plot}</p>
                  </S.PlotContainer>
                </S.LeftSide>
              </S.BottomContainer>
              <Reviews colors={data.colors} reviews={data.reviews} />
              <S.DirectorAndWriterContainer>
                <div>Director: {data.director}</div>
                <div>Writers: {data.writer}</div>
              </S.DirectorAndWriterContainer>
              <S.ButtonContainer>
                <Button title="Watch Online" handleClick={handleWatch} />
              </S.ButtonContainer>
              <S.MovieCastContainer color={data.colors.lightVibrant}>
                <MovieCast cast={data.cast} colors={data.colors} />
              </S.MovieCastContainer>
            </S.MovieCard>
          </S.Container>
        )}
      </Await>
    </Suspense>
  );
};

export default ShowMovie;
