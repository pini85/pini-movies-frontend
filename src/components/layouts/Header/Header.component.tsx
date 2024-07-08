import { FC, useLayoutEffect, useRef } from "react";

import { useDispatch } from "react-redux";
import { setHeaderHeight } from "@/redux/slices/ui.slice";
import * as S from "./header.styles";

type HeaderProps = {
  children: React.ReactNode;
};
const Header: FC<HeaderProps> = ({ children }) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const height = ref.current.offsetHeight;
    dispatch(setHeaderHeight(height));
  }, [ref]);

  return <S.Header ref={ref}>{children}</S.Header>;
};

export default Header;
