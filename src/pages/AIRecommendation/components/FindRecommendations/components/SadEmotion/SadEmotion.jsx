import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components/macro";

const Title = styled.h2`
  font-size: ${(props) => (props.clicked ? "2rem" : "1.5rem")};
  font-weight: ${(props) => (props.clicked ? 700 : 300)};
  color: var(--text-white);
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  min-height: 3.5rem;
  transition: all 0.3s;
`;

const drop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  80% {
    transform: translateY(20px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(40px);
    opacity: 0;
  }
`;

const Svg = styled.svg`
  width: 15rem;
  height: 15rem;
  transition: transform 0.3s;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 10rem;
    height: 10rem;
  }

  &.clicked {
    transform: scale(1.2) rotate(-5deg);
  }

  .face {
    fill: var(--face-fill, var(--primary-color));
    stroke: var(--face-stroke, var(--primary-color-light));
  }

  .eye {
    transform-origin: center;
    fill: var(--eye-fill, #000000);
  }

  .mouth {
    transition: d 0.3s;
    stroke: var(--mouth-stroke, #000000);
  }

  &:hover .mouth,
  &.clicked .mouth {
    d: path("M20 40 Q32 30, 44 40");
  }

  &.clicked .face {
    fill: var(--face-fill-hover, var(--primary-color-light));
  }

  .tear {
    fill: var(--tear-fill, #2196f3);
    opacity: 0.8;
    transition: opacity 0.3s;
    animation: ${drop} 2s infinite;
  }

  .tear-group {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &.clicked .tear-group {
    opacity: 1;
  }

  .tear-group .tear {
    animation: ${drop} 2s infinite;
    animation-delay: 0.5s;
  }
`;

const SadEmotion = ({ handleClick, selectedAnswers }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log({ selectedAnswers });
    if (selectedAnswers[0] !== "sad") {
      setClicked(false);
    }
  }, [selectedAnswers]);

  const handleEmotionClick = () => {
    const value = clicked ? "" : "sad";
    handleClick(value);
    setClicked(!clicked);
  };

  return (
    <>
      <Svg
        className={clicked ? "clicked" : ""}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        onClick={handleEmotionClick}
      >
        <circle className="face" cx="32" cy="32" r="30" strokeWidth="4" />
        <circle className="eye" cx="22" cy="24" r="4" />
        <circle className="eye" cx="42" cy="24" r="4" />
        <path
          className="mouth"
          d="M22 40 Q32 35, 42 40"
          strokeWidth="4"
          fill="none"
        />
        <path className="tear" d="M24 28 Q22 34, 26 36 Q30 34, 28 28 Z" />
        <g className="tear-group">
          <path className="tear" d="M24 40 Q22 46, 26 48 Q30 46, 28 40 Z" />
          <path className="tear" d="M34 36 Q32 42, 36 44 Q40 42, 38 36 Z" />
        </g>
      </Svg>
      <Title clicked={clicked}>Sad</Title>
    </>
  );
};

export default SadEmotion;
