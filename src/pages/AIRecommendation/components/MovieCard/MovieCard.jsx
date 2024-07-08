import * as S from "./MovieCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MovieCard = ({ movie }) => {
  const image = () => {
    if (movie.poster_path === null) {
      return "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
    } else {
      return `https://image.tmdb.org/t/p/w185//${movie.poster_path}`;
    }
  };

  return (
    <S.CardContainer>
      <S.CardInner>
        <S.CardFront image={image}>
          <S.Year>
            {movie.release_date ? movie.release_date.substr(0, 4) : "N/A"}
          </S.Year>
          <S.Rating>
            <S.IconWrapper>
              <FontAwesomeIcon icon={faStar} />
            </S.IconWrapper>
            {Number(movie.vote_average).toFixed(1)}
          </S.Rating>
          <S.TitleFront> {movie.title}</S.TitleFront>
        </S.CardFront>
      </S.CardInner>
    </S.CardContainer>
  );
};
export default MovieCard;
