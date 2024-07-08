import React, { FC } from "react";
import { ButtonContainer } from "./button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import google from "../../assets/images/google.svg";
import { ButtonProps } from "./Button.types";

const Button: FC<ButtonProps> = (props) => {
  const renderButton = () => {
    switch (props.icon) {
      case "search":
        return (
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: "5px" }} />
        );
      case "google":
        return (
          <span
            style={{ width: "1.5rem", height: "1.5rem", marginRight: "1rem" }}
          >
            <img src={google} alt="google" />
          </span>
        );
      case "watch":
        return <FontAwesomeIcon icon={faPlay} />;

      default:
        return null;
    }
  };

  return (
    <ButtonContainer
      opacity={props.disabled ? 0.22 : 1}
      height={props.height}
      width={props.width}
      padding={props.padding}
      margin={props.margin}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {renderButton()}

      {props.title}
    </ButtonContainer>
  );
};
export default Button;
