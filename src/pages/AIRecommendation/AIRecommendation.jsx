import { useState } from "react";
import Button from "components/Button/Button";
import CategoryTitle from "components/CategoryTitle/CategoryTitle.component";
import Modal from "components/Modal/Modal.component";
import FineTuneRecommendations from "./components/FineTuneRecommendations/FineTuneRecommendations";
import FindRecommendations from "./components/FindRecommendations/FindRecommendations";
import { recommendationQuestions } from "./components/FindRecommendations/utils";
import DisplayPersonalizedRecommendations from "./components/DisplayPersonalizedRecommendations/DisplayPersonalizedRecommendations";
import { AdvancedFormProvider } from "pages/AdvancedSearch/context/advancedSearchFormContext";
const AIRecommendation = () => {
  const [answers, setAnswers] = useState(
    recommendationQuestions.map((question) => ({
      question: question.question,
      selectedAnswers: [],
    }))
  );
  console.log({ answers });

  const [toggleFindRecommendations, setToggleFindRecommendations] =
    useState(false);
  const [fineTuneRecommendations, setFineTuneRecommendations] = useState(false);
  const toggleModal = (setToggle) => setToggle((prevState) => !prevState);
  return (
    <div>
      <CategoryTitle title="AI Recommendations" />
      <Button
        title="Personalize Recommendations"
        handleClick={() => {
          toggleModal(setToggleFindRecommendations);
        }}
      />
      <Button
        title="Fine Tune Recommendations"
        handleClick={() => {
          toggleModal(setFineTuneRecommendations);
        }}
      />
      {toggleFindRecommendations && (
        <AdvancedFormProvider dontShowChoice>
          <Modal
            isToggled={toggleFindRecommendations}
            setToggled={setToggleFindRecommendations}
          >
            <FindRecommendations
              answers={answers}
              setAnswers={setAnswers}
              closeModal={() => toggleModal(setToggleFindRecommendations)}
            />
          </Modal>
        </AdvancedFormProvider>
      )}
      {fineTuneRecommendations && (
        <Modal
          title="Fine Tune Recommendations"
          isToggled={fineTuneRecommendations}
          setToggled={setFineTuneRecommendations}
        >
          <FineTuneRecommendations />
        </Modal>
      )}
      <DisplayPersonalizedRecommendations answers={answers} />
    </div>
  );
};
export default AIRecommendation;
