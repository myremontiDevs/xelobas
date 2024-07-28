
import RegComponent from "../RegComponent";
import styles from "../Styles/StylesForPages.module.scss";

function RegistrationPage (){
    return(
        <div className={styles.parentContainer}>
        <div className={styles.pageContainer}>
            <RegComponent/>
        </div>
        </div>
    )
}
export default RegistrationPage;