import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

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

const eyebrowMove = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
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
    transform: scale(1.2);
  }

  .face {
    fill: var(--face-fill, var(--primary-color));
    stroke: var(--face-stroke, var(--primary-color-light));
  }

  .eye {
    transition: transform 0.3s;
    fill: var(--eye-fill, #000000);
  }

  &:hover .eye,
  &.clicked .eye {
    transform: translateY(-2px);
  }

  &.clicked .face {
    fill: var(--face-fill-hover, var(--primary-color-light));
  }

  .mouth {
    transition: transform 0.3s;
    stroke: var(--mouth-stroke, #000000);
  }

  &:hover .mouth,
  &.clicked .mouth {
    transform: translateY(2px);
  }

  .eyebrow {
    transition: transform 0.3s;
    stroke: var(--eyebrow-stroke, #000000);
  }

  &.clicked .eyebrow {
    animation: ${eyebrowMove} 0.5s infinite;
  }
`;

const NeutralEmotion = ({ handleClick, selectedAnswers }) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (selectedAnswers[0] !== "neutral") {
      setClicked(false);
    }
  }, [selectedAnswers]);

  const handleEmotionClick = () => {
    const value = clicked ? "" : "neutral";
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
        <path
          className="eyebrow eyebrow-left"
          d="M18 16 L26 16"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="eyebrow eyebrow-right"
          d="M38 16 L46 16"
          strokeWidth="4"
          fill="none"
        />
        <circle className="eye" cx="22" cy="24" r="4" />
        <circle className="eye" cx="42" cy="24" r="4" />
        <path className="mouth" d="M22 40 L42 40" strokeWidth="4" fill="none" />
      </Svg>
      <Title clicked={clicked}>Neutral</Title>
    </>
  );
};

export default NeutralEmotion;
