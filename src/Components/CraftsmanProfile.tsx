
import styles from "./Styles/CraftsmanProfile.module.scss";
import craftsmenData from "./Datas/craftsmenData.json";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import { faSquareWhatsapp} from "@fortawesome/free-brands-svg-icons";


function CraftsmanProfile() {

  const { userId } = useParams<{ userId: string }>();
  const data: CraftsmenInterface[] = craftsmenData.filter(
    (craftsman) => craftsman.userId === userId
  );


  const handleCallClick = (phoneNumber:string) => {
    window.location.href = `tel:${phoneNumber}`;
};

  const handleWhatsAppClick=(phoneNumber:string)=>{
const whatsappUrl = `https://wa.me/+995${phoneNumber}`;
window.location.href = whatsappUrl;
  }

 
  return (
    <div className={styles.parentContainer}>
      <div className={styles.craftsmanProfileContainer}>
        {data.map((user) => (
          <div key={user.userId} className={styles.userCard}>
            <div className={styles.userCard__userImgContainer}>
              <img
                src={user.profilePicture}
                alt="userImg"
                className={styles.userCard__userImgContainer__userImg}
              />
            </div>

            <div className={styles.userCard__contact}>
            <div className={styles.userCard__contact__phone} onClick={()=> handleCallClick(user.phoneNumber)}>
                <FontAwesomeIcon icon={faPhone } className={styles.faPhone } />
                </div>
              
                <FontAwesomeIcon icon={faSquareWhatsapp } className={styles.faSquareWhatsapp } onClick={() => handleWhatsAppClick(user.phoneNumber)}/>
            </div>

            <div className={styles.info}>
                <div className={styles.info__key}>ხელოსანი</div>
                <span className={styles.info__value}>{user.firstName}</span>
                <span className={styles.info__value}>{user.lastName}</span>
               </div>

            
            <div className={styles.info}>
                <div className={styles.info__key}>სტატუსი</div>
                <p className={styles.info__value}> {user.verificationStatus === "true"
                  ? "ვერიფიცირებულია"
                  : "არ არის ვერიფიცირებული"}</p>
               </div>

                

                <div className={styles.info}>
                <div className={styles.info__key}>ტელეფონი</div>
                <p className={styles.info__value}>{user.phoneNumber}</p>
               </div>

                

                <div className={styles.info}>
                <div className={styles.info__key}>ელ-ფოსტა</div>
                <p className={styles.info__value}>{user.email}</p>
               </div>


                <div className={styles.info}>
                <div className={styles.info__key}>ლოკაცია</div>
                <p className={styles.info__value}>{user.city}, {user.district}</p>
               </div>

                <div className={styles.info}>
                <div className={styles.info__key}>პროფესია</div>
                <p className={styles.info__value}>{user.profession}</p>
               </div>

                <div className={styles.info}>
                <div className={styles.info__key}>(1კვ/მ)-ის ფასი</div>
                <p className={styles.info__value}>{user.price} ლარი</p>
               </div>

               <div className={styles.info}>
                <div className={styles.info__key}>სამუშაო გამოცდილება</div>
                <p className={styles.info__value}>{user.experience} წელი</p>
               </div>
               
          </div>
        ))}
      </div>
    </div>
  );
}

export default CraftsmanProfile;


