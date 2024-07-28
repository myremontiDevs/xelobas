import styles from "./Styles/RegComponent.module.scss";
import { useNavigate } from "react-router-dom";

function AutorizationComponent(){
    const navigate = useNavigate();

    const handleUserAuthorization=()=>{
        navigate(`/authorization/userAuthorization`);
    }

    const handleCraftsmanAuthorization=()=>{
        navigate(`/authorization/craftsmanAuthorization`);
    }

    return(
        <div className={styles.parentContainer}>
        <div className={styles.regOptions}>
            <div className={styles.userRegistration} onClick={handleUserAuthorization}>
                <p>მომხმარებლის პირადი სივრცე</p>
            </div>

            <div className={styles.craftsmanRegistration} onClick={handleCraftsmanAuthorization}>
                <p>ხელოსნის პირადი სივრცე</p>
            </div>
        </div>
    </div>
    )
}

export default AutorizationComponent;