import { useState } from "react";
import * as S from "./FineTuneRecommendations.styles";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../MovieCard/MovieCard";
import useWidth from "hooks/useWidth.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import FineTuneButton from "./components/FineTuneButton/FineTuneButton";
import Card from "components/Card/Card.tsx";

const movie = {
  adult: false,
  backdrop_path: "/kYgQzzjNis5jJalYtIHgrom0gOx.jpg",
  genre_ids: [16, 28, 10751, 35, 14],
  id: 1011985,
  original_language: "en",
  original_title: "Kung Fu Panda 4",
  overview:
    "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
  popularity: 1051.554,
  poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
  release_date: "2024-03-08",
  title: "Kung Fu Panda 4",
  video: false,
  vote_average: 7.12,
  vote_count: 1704,
};

const FineTuneRecommendations = ({ children }) => {
  const [currentMovie, setCurrentMovie] = useState(movie);
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
  const [skipClicked, setSkipClicked] = useState(false);
  const [key, setKey] = useState(0);

  const width = useWidth().width;
  const isMobile = width < 600;

  const animationVariants = {
    initial: { x: isMobile ? "-100vw" : "-50vw", opacity: 0 },
    enter: { x: "0", opacity: 1, transition: { duration: 1 } },
    exit: {
      x: isMobile ? "100vw" : "50vw",
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  const handleMovieChange = () => {
    setKey((prevKey) => prevKey + 1);
    setCurrentMovie((prevMovie) => movie);
  };

  const handleThumbsUpClick = () => {
    setThumbsUpClicked(true);
    handleMovieChange();
    setTimeout(() => {
      setThumbsUpClicked(false);
    }, 1000);
  };
  const handleThumpsDown = () => {
    setThumbsDownClicked(true);
    handleMovieChange();
    setTimeout(() => {
      setThumbsDownClicked(false);
    }, 1000);
  };
  const handleSkipClick = () => {
    setSkipClicked(true);
    handleMovieChange();
    setTimeout(() => {
      setSkipClicked(false);
    }, 1000);
  };
  const disabled = thumbsDownClicked || thumbsUpClicked || skipClicked;
  return (
    <S.Container>
      <S.MovieCardContainer>
        <AnimatePresence>
          <motion.div
            key={key}
            variants={animationVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            style={{
              position: "absolute",
            }}
          >
            <Card
              height="45rem"
              width="35rem"
              fromRecommendations
              movie={currentMovie}
            />
          </motion.div>
        </AnimatePresence>
      </S.MovieCardContainer>
      <S.ButtonContainer>
        <FineTuneButton disabled={disabled} handleOnClick={handleThumbsUpClick}>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={thumbsUpClicked ? "fa-bounce" : ""}
          />
        </FineTuneButton>
        <FineTuneButton disabled={disabled} handleOnClick={handleSkipClick}>
          <S.RotatingSkip startanimation={skipClicked} />
          {/* <Skip /> */}
        </FineTuneButton>
        <FineTuneButton disabled={disabled} handleOnClick={handleThumpsDown}>
          <FontAwesomeIcon
            icon={faThumbsDown}
            className={thumbsDownClicked ? "fa-bounce" : ""}
          />
        </FineTuneButton>
      </S.ButtonContainer>
      {children}
    </S.Container>
  );
};
export default FineTuneRecommendations;
