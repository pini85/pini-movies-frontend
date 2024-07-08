// IconGenre.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Option from "components/Option/Option.component";
import * as S from "./IconGenre.styles";
import {
  faMasksTheater,
  faHandcuffs,
  faClapperboard,
  faPeopleRoof,
  faHatWizard,
  faBook,
  faGhost,
  faMusic,
  faBomb,
  faHatCowboySide,
  faJetFighter,
  faPencil,
  faFaceSadCry,
  faUserSecret,
  faSkull,
  faUser,
  faHeart,
  faChampagneGlasses,
  faHouse,
  faChildren,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceKissWinkHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faSpaceAwesome,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

const iconMap = {
  action: faJetFighter,
  adventure: faSpaceAwesome,
  animation: faPencil,
  comedy: faMasksTheater,
  crime: faHandcuffs,
  documentary: faClapperboard,
  drama: faFaceSadCry,
  family: faPeopleRoof,
  fantasy: faHatWizard,
  history: faBook,
  horror: faGhost,
  music: faMusic,
  mystery: faUserSecret,
  romance: faFaceKissWinkHeart,
  "sci-fi": faRedditAlien,
  thriller: faSkull,
  war: faBomb,
  western: faHatCowboySide,
  alone: faUser,
  date: faHeart,
  friends: faChampagneGlasses,
  houseHold: faHouse,
  kids: faChildren,
};

const IconGenre = ({
  iconName,
  iconValue,
  callback,
  isSelected,
  isOccasion,
}) => {
  const widthOfOption = isOccasion ? "35rem" : "18rem";
  console.log({ isOccasion });
  console.log({ widthOfOption });
  const icon = iconMap[iconValue];
  const justify = isOccasion ? "flex-start" : "center";

  if (!icon) {
    throw new Error(`Icon ${iconValue} not found`);
  }

  return (
    <Option
      width={widthOfOption}
      handleOnClick={callback}
      isActive={isSelected}
    >
      <S.Container justify={justify}>
        <FontAwesomeIcon icon={icon} size="2x" />
        <div>{iconName.toUpperCase()}</div>
      </S.Container>
    </Option>
  );
};

export default IconGenre;
