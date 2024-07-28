
import AutorizationComponent from "../AutorizationComponent";
import styles from "../Styles/StylesForPages.module.scss"

function MyPage (){
    return(
        <>
       <div className={styles.parentContainer}>
        <div className={styles.pageContainer}>
           <AutorizationComponent/>
        </div>
        </div>
        </>
    )
}
export default MyPage;