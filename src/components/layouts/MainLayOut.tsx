// src/components/layouts/MainLayOut.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layouts/Footer/Footer.component";
import Header from "@/components/layouts/Header/Header.component";
import MainNavigation from "@/components/layouts/Header/components/MainNavigation.components";

const MainLayOut: React.FC = () => {
  const styles = {
    flex: "1",
  };

  return (
    <>
      <Header>
        <MainNavigation />
      </Header>
      <main style={styles}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayOut;
