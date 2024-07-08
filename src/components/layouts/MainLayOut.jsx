import Footer from "./Footer/Footer.component";
import Header from "./Header/Header.component";
import MainNavigation from "./Header/components/MainNavigation.components";

const MainLayOut = ({ children }) => {
  const styles = {
    flex: "1",
  };

  return (
    <>
      <Header>
        <MainNavigation />
      </Header>
      <main style={styles}>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayOut;
