import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./CheckBox.styles";

const Checkbox = ({ label, checked, onChange, icon }) => {
  console.log({ icon });
  return (
    <S.CheckboxContainer>
      <input type="checkbox" checked={checked} onChange={onChange} id={label} />
      <label for={label}>{label}</label>
      {icon && <FontAwesomeIcon icon={icon} />}
    </S.CheckboxContainer>
  );
};

export default Checkbox;
