import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./Step.styles";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import { useWizard } from "react-use-wizard";

import HappyEmotion from "../HappyEmotion/HappyEmotion";
import NeutralEmotion from "../NeutralEmotion/NeutralFace";
import SadEmotion from "../SadEmotion/SadEmotion";
import ActorInput from "pages/AdvancedSearch/components/FormInput/Inputs/ActorInput";
import SearchMovies from "../SearchMovies/SearchMovies";
import DirectorInput from "pages/AdvancedSearch/components/FormInput/Inputs/DirectorInput";
import Input from "components/Input/Input.component";
import SelectInput from "components/SelectInput/SelectInput.component";
import FineTuneRecommendations from "pages/AIRecommendation/components/FineTuneRecommendations/FineTuneRecommendations";
import CategoryTitle from "components/CategoryTitle/CategoryTitle.component";
import IconGenre from "../IconGenre/IconGenre";
import {
  faMagnifyingGlassChart,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
// Map component names to components
const componentMap = {
  HappyEmotion,
  NeutralEmotion,
  SadEmotion,
  SearchMovies,
  FineTuneRecommendations,
};
const iconMap = {
  SearchMovies: faMagnifyingGlassChart,
  favorite: faHeartCirclePlus,
};

const Step = ({
  question,
  answers,
  selectedAnswers,
  handleCheckboxChange,
  handleInputChange,
  handleEmotionChange,
  handleIconClick,
  closeModal,
}) => {
  const {
    previousStep,
    nextStep,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
  } = useWizard();
  const isFinetuneRecommendation = question === "Do you like this movie?";
  const isOccasion = question === "What is the occasion?";

  return (
    <S.Container>
      <CategoryTitle title={question} />

      <S.StepCount>
        {activeStep + 1}/{stepCount}
      </S.StepCount>
      <S.AnswersContainer
        isFinetuneRecommendation={isFinetuneRecommendation}
        occasionQuestion={question === "What is the occasion?"}
      >
        {answers.map((answer, index) => {
          const icon = iconMap[answer.content];
          console.log({ icon });
          switch (answer.type) {
            case "component":
              const Component = componentMap[answer.content];

              return (
                <S.ComponentContainer
                  key={index}
                  movieRecommendation={isFinetuneRecommendation}
                >
                  <Component
                    icon={icon}
                    handleClick={handleEmotionChange}
                    selectedAnswers={selectedAnswers}
                  >
                    <S.ButtonContainer>
                      <Button
                        width="16rem"
                        disabled={isFirstStep}
                        title="Previous Step"
                        handleClick={previousStep}
                      />
                      <Button
                        width="16rem"
                        title={isLastStep ? "Get movies" : "Next Step"}
                        handleClick={isLastStep ? closeModal : nextStep}
                      />
                    </S.ButtonContainer>
                  </Component>
                </S.ComponentContainer>
              );
            case "icon":
              return (
                <IconGenre
                  isOccasion={isOccasion}
                  key={index}
                  iconValue={answer.value}
                  iconName={answer.content}
                  callback={() => handleIconClick(activeStep, answer.value)}
                  isSelected={selectedAnswers.includes(answer.value)}
                />
              );
            case "checkbox":
              return (
                <S.CheckBoxContainer key={index}>
                  <Checkbox
                    label={answer.content}
                    checked={selectedAnswers.includes(answer.value)}
                    onChange={() => handleCheckboxChange(answer.value)}
                    icon={answer?.icon}
                  />
                </S.CheckBoxContainer>
              );
            case "cast-input":
              return (
                <S.CastContainer>
                  <FontAwesomeIcon icon={icon} size="2x" />
                  <S.InputContainer key={index}>
                    <DirectorInput width="18rem" />
                    <ActorInput width="18rem" />
                  </S.InputContainer>
                </S.CastContainer>
              );
            case "input":
              return (
                <>
                  <S.InputContainer key={index}>
                    <Input
                      placeholder={answer.content}
                      label={answer.content}
                      maxLen={1}
                    />
                  </S.InputContainer>
                </>
              );
            case "selector":
              return (
                <S.SelectorContainer key={index}>
                  <SelectInput
                    title={answer.placeholder}
                    name={answer.value}
                    handleOnChange={handleInputChange}
                    value={selectedAnswers[0]?.[answer.value] || ""}
                  >
                    {answer.content.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectInput>
                </S.SelectorContainer>
              );
            default:
              return null;
          }
        })}
      </S.AnswersContainer>
      {!isFinetuneRecommendation && (
        <S.ButtonContainer>
          <Button
            width="16rem"
            disabled={isFirstStep}
            title="Previous Step"
            handleClick={previousStep}
          />
          <Button
            width="16rem"
            title={isLastStep ? "Get movies" : "Next Step"}
            handleClick={isLastStep ? closeModal : nextStep}
          />
        </S.ButtonContainer>
      )}
    </S.Container>
  );
};

export default Step;
