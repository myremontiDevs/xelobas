import styles from "./Styles/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,faSquarePhone
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareXTwitter,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className={styles.parentContainer}>
        <div className={styles.mainContainer}>
          <footer className={styles.footer}>
            <div className={styles.footer__leftSide}>
              <h2 className={styles.footer__leftSide__header}>Xeloba.ge</h2>
              <div className={styles.footer__leftSide__aboutUs}>
                <p>
                 ჩვენი მიზანია, მოგეხმაროთ სასურველი სპეციალისტის მოძიებაში ხელსაყრელ ფასად, სასურველ 
                 ლოკაციაზე და შესაბამისი გამოცდილებით. 
                </p>
               
              </div>
            </div>
            <div className={styles.footer__rightSide}>

              <div className={styles.footer__rightSide__location}>
              <FontAwesomeIcon icon={faLocationDot } className={styles.faLocationDot} />
              <span> ქ. თბილისი, რეზო გაბაშვილის N10</span>  
              </div>

              <div className={styles.footer__rightSide__contact}>
              <FontAwesomeIcon icon={faSquarePhone } className={styles.faSquarePhone} />
              <span>550 05 59 96</span>
              </div>


              <div className={styles.footer__rightSide__socialNetworks}>
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className={styles.faFacebook}
                />

                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className={styles.faSquareInstagram}
                />

                <FontAwesomeIcon
                  icon={faSquareXTwitter}
                  className={styles.faSquareXTwitter}
                />

                <FontAwesomeIcon
                  icon={faSquareYoutube}
                  className={styles.faSquareYoutube}
                />
              </div>
            </div>
          </footer>
        </div>
       <p className={styles.creators}>Copyright 2024 | created by Giorgi Otarashvili, Mikheil kuprava</p>
      </div>
    </>
  );
}

export default Footer;
