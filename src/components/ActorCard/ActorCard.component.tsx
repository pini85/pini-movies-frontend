import React from 'react';
import { useQuery } from 'react-query';
import { tmdbCastId } from 'apis/tmdbApi';
import {
  Container,
  CardContainer,
  ImageContainer,
  DetailContainer,
  Img,
  Title,
} from './ActorCard.styles';
import { ActorCardProps } from './Actor.types';
const ActorCard: React.FC<ActorCardProps> = ({ actor, handleClick }) => {
  const { data } = useQuery(actor, () => tmdbCastId(actor));

  const profileImg = data?.results[0].profile_path;

  return data ? (
    <Container onClick={() => handleClick(actor)}>
      <CardContainer>
        <ImageContainer>
          <Img src={`https://image.tmdb.org/t/p/w185//${profileImg}`} alt={actor} />
        </ImageContainer>

        <DetailContainer>
          <Title>{actor}</Title>
        </DetailContainer>
      </CardContainer>
    </Container>
  ) : null;
};
export default ActorCard;
