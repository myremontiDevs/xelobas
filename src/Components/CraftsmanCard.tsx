import styles from "./Styles/CraftsmanCard.module.scss";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { FC } from "react";

interface CraftsmanCardProps {
    craftsman: CraftsmenInterface;
  }

  const CraftsmanCard: FC<CraftsmanCardProps> = ({ craftsman }) => {
    const navigate = useNavigate();

  const craftsmanProfileHandler = (userId: string) => {
    navigate(`/craftsman/${userId}`);
  };

    return(
        <div
      key={craftsman.userId}
      className={styles.craftsmanCard}
      onClick={() => craftsmanProfileHandler(craftsman.userId)}
    >
      <div className={styles.imgContainer}>
      <img
        src={craftsman.profilePicture}
        alt="userImg"
        className={styles.craftsmanCard__userImg}
      />
      </div>
      <div className={styles.craftsmanCard__verificationStatus}>
        <FontAwesomeIcon
          icon={
            craftsman.verificationStatus === "true" ? faCircleCheck : faCircleXmark
          }
          className={
            craftsman.verificationStatus === "true"
              ? styles.faCircleCheck
              : styles.faCircleXmark
          }
        />
        <p>
          {craftsman.verificationStatus === "true"
            ? "ვერიფიცირებულია"
            : "არ არის ვერიფიცირებული"}
        </p>
      </div>
      <p className={styles.craftsmanCard__userIdentity}>
        {craftsman.firstName} {craftsman.lastName}
      </p>
      <div className={styles.craftsmanCard__location}>
        <FontAwesomeIcon
          icon={faLocationDot}
          className={styles.faLocationDot}
        />
        <p>
          {craftsman.city}, {craftsman.district}
        </p>
      </div>
      <p className={styles.craftsmanCard__profession}>
        {craftsman.profession}
      </p>
      <p className={styles.craftsmanCard__price}>
        ფასი: {craftsman.price}ლ (1კვ/მ)
      </p>
    </div>
    )
}

export default CraftsmanCard;