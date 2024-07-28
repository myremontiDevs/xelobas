import styles from "./Styles/Root.module.scss";
import { Link, Outlet } from "react-router-dom";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faAddressCard,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import { useContext} from "react";
import { MainContext } from "../App";
import Footer from "./Footer";
import UseScrollToTop from "./Hooks/UseScrollsToTheTop";
import { useNavigate } from "react-router-dom";

function Root() {
  UseScrollToTop();
  const navigate = useNavigate();
  const context = useContext(MainContext);

  const {
    menuBar,
    setMenuBar,
    selectedNavigation,
    setSelectedNavigation,
    setSearchByDistrict,
    setSearchByProfession,
    setSearchByVerification,
    setSearchByExperience,
    setSearchByPriceFrom,
    setSearchByPriceUpTo,
  } = context;

  const handleNavigation = (nav: string) => {
    navigate(nav);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setSelectedNavigation(nav);
    setMenuBar(false);
    setSearchByDistrict("");
    setSearchByProfession("");
    setSearchByVerification("");
    setSearchByExperience([]);
    setSearchByPriceFrom("");
    setSearchByPriceUpTo("");
    // context?.setFilterByDistrict("");
    // context?.setFilterByProfession("");
  };

  return (
    <>
      <div className={styles.ParentContainer}>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <div className={styles.logoContainer}>
              <Link
                to="/"
                onClick={() => {
                  handleNavigation("home");
                }}
              >
                <img src={logo} alt="logo" className={styles.logoImg} />
              </Link>

              <div className={styles.logoContainer__menuBar}>
                {!menuBar ? (
                  <div>
                    <FontAwesomeIcon
                      icon={faBars}
                      className={styles.faBars}
                      onClick={() => {
                        setMenuBar(!menuBar);
                      }}
                    />
                  </div>
                ) : (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.faXmark}
                    onClick={() => {
                      setMenuBar(!menuBar);
                    }}
                  />
                )}
              </div>
            </div>

            <div
              className={
                menuBar ? styles.mobileNavigation : styles.desktopNavigation
              }
            >
              <Link
                to="/searchPage"
                className={`${styles.navElement} ${
                  selectedNavigation === "searchPage"
                    ? styles.selectedNavElement
                    : ""
                }`}
                onClick={() => {
                  handleNavigation("searchPage");
                }}
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={styles.faMagnifyingGlass}
                />
                <span>დეტალური ძებნა</span>
              </Link>

              <Link
                to="/myPage"
                className={`${styles.navElement} ${
                  selectedNavigation === "myPage"
                    ? styles.selectedNavElement
                    : ""
                }`}
                onClick={() => {
                  handleNavigation("myPage");
                }}
              >
                <FontAwesomeIcon icon={faUser} className={styles.faUser} />
                <span>ჩემი გვერდი</span>
              </Link>

              <Link
                to="/registration"
                className={`${styles.navElement} ${
                  selectedNavigation === "registration"
                    ? styles.selectedNavElement
                    : ""
                }`}
                onClick={() => {
                  handleNavigation("registration");
                }}
              >
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className={styles.faAddressCard}
                />
                <span>რეგისტრაცია</span>
              </Link>
            </div>
          </nav>
        </div>
        <Filter />

        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default Root;
