import React, { useEffect } from "react";
import { Wizard } from "react-use-wizard";
import Step from "./components/Step/Step";
import { recommendationQuestions } from "./utils";
import { useAdvancedForm } from "pages/AdvancedSearch/context/advancedSearchFormContext";

const FindRecommendations = ({ closeModal, answers, setAnswers }) => {
  const handleCheckboxChange = (stepIndex, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const selectedAnswers = newAnswers[stepIndex].selectedAnswers;
      if (selectedAnswers.includes(answer)) {
        newAnswers[stepIndex].selectedAnswers = selectedAnswers.filter(
          (a) => a !== answer
        );
      } else {
        newAnswers[stepIndex].selectedAnswers.push(answer);
      }
      return newAnswers;
    });
  };

  const { inputData } = useAdvancedForm();

  useEffect(() => {
    const favoriteActorsDirectorsIndex = recommendationQuestions.findIndex(
      (question) => question.question === "Favorite actors and directors?"
    );

    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      if (favoriteActorsDirectorsIndex !== -1) {
        newAnswers[favoriteActorsDirectorsIndex].selectedAnswers = inputData;
      }
      return newAnswers;
    });
  }, [inputData, setAnswers]);

  const handleIconClick = (stepIndex, value) => {
    console.log({ stepIndex, value });
    console.log(answers[stepIndex]);
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const selectedAnswers = newAnswers[stepIndex].selectedAnswers;
      if (answers[stepIndex].selectedAnswers.includes(value)) {
        newAnswers[stepIndex].selectedAnswers = selectedAnswers.filter(
          (name) => name !== value
        );
      } else {
        newAnswers[stepIndex].selectedAnswers.push(value);
      }
      return newAnswers;
    });
  };

  const handleEmotionChange = (stepIndex, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[stepIndex].selectedAnswers = [value];
      return newAnswers;
    });
  };

  const handleInputChange = (stepIndex, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[stepIndex].selectedAnswers = [value];
      return newAnswers;
    });
  };

  return (
    <Wizard>
      {recommendationQuestions.map((question, index) => (
        <Step
          key={index}
          question={question.question}
          answers={question.answers}
          selectedAnswers={answers[index].selectedAnswers}
          handleCheckboxChange={(answer) => handleCheckboxChange(index, answer)}
          handleInputChange={(value) =>
            handleInputChange(index, value.target.value)
          }
          handleEmotionChange={(value) => handleEmotionChange(index, value)}
          handleIconClick={handleIconClick}
          closeModal={closeModal}
        />
      ))}
    </Wizard>
  );
};

export default FindRecommendations;
