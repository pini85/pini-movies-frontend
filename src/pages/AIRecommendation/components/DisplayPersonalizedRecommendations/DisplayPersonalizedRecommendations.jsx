import React from "react";
import * as S from "./DisplayPersonalizedRecommendations.styles";

const DisplayPersonalizedRecommendations = ({ answers }) => {
  const displaySearchResults = () => {
    return answers.map((answer, index) => {
      let value;
      let questionTitle = answer.question.replace(/\?$/, "");
      if (questionTitle === "Favorite actors and directors") {
        const actors = answer.selectedAnswers.actors?.casts.length
          ? answer.selectedAnswers.actors.casts.map((cast) => (
              <div key={cast.id}>{cast.name}</div>
            ))
          : null;
        const directors = answer.selectedAnswers.directors?.casts.length
          ? answer.selectedAnswers.directors.casts.map((cast) => (
              <div key={cast.id}>{cast.name}</div>
            ))
          : null;

        value =
          actors || directors ? (
            <>
              <div>Actors: {actors || "N/A"}</div>
              <div>Directors: {directors || "N/A"}</div>
            </>
          ) : (
            "N/A"
          );
      } else {
        value = answer.selectedAnswers.length
          ? answer.selectedAnswers.join(", ")
          : "N/A";
      }

      return (
        <S.ResultWrapper key={index}>
          <S.ResultSpan>{questionTitle}</S.ResultSpan> : {value}
        </S.ResultWrapper>
      );
    });
  };

  return (
    <S.Container>
      <S.Title>Search Information</S.Title>
      {displaySearchResults()}
    </S.Container>
  );
};

export default DisplayPersonalizedRecommendations;
