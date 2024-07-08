import * as S from "./FineTuneButton.styles.js";
const FineTuneButton = ({ disabled, handleOnClick, children }) => {
  return (
    <S.Container disabled={disabled} onClick={handleOnClick}>
      {children}
    </S.Container>
  );
};
export default FineTuneButton;
