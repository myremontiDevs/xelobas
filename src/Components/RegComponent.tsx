import styles from "./Styles/RegComponent.module.scss";
import { useNavigate } from "react-router-dom";



function RegComponent(){

    const navigate = useNavigate();

    const handleCraftsmanRegistration=()=>{
        navigate(`/registration/craftsmanRegistration`);
    }

    const handleUserRegistration=()=>{
        navigate(`/registration/userRegistration`);
    }

    return(
        <div className={styles.parentContainer}>
            <div className={styles.regOptions}>
                <div className={styles.userRegistration} onClick={handleUserRegistration}>
                    <p>მომხმარებლის რეგისტრაცია</p>
                </div>

                <div className={styles.craftsmanRegistration} onClick={handleCraftsmanRegistration}>
                    <p>ხელოსნის რეგისტრაცია</p>
                </div>
            </div>
        </div>
    )
}

export default RegComponent;