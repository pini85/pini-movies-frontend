import * as S from "./navigation.styles.js";
import { useSelector } from "react-redux";
import Login from "@/components/ui/Login/Login.component.jsx";
import Search from "@/components/ui/Search/Search.component";
import LightSwitch from "@/components/ui/LightSwitch/LightSwitch.component";
import Customize from "@/components/ui/Customize/Customize.component";
import IconLink from "@/components/ui/IconLink/IconLink";
import Hamburger from "@/components/ui/Hamburger/Hamburger.component.jsx";
import useWidth from "@/hooks/useWidth.hooks.jsx";
const MainNavigation = () => {
  const currentUser = useSelector((state) => state.user.user);
  const width = useWidth().width;

  return (
    <>
      <Hamburger />
      <S.NavigationWrapper>
        {currentUser && <IconLink link="/savedMovies" icon="heart" />}
        <Login />
        {width > 700 && (
          <>
            <Customize />
            <LightSwitch />
            <Search />
          </>
        )}
      </S.NavigationWrapper>
    </>
  );
};

export default MainNavigation;
