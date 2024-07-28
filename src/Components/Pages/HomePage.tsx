import Categories from "../Categories";
import styles from "../Styles/StylesForPages.module.scss";


function HomePage (){
  
    return(
        <>
        <div className={styles.parentContainer}>
        <div className={styles.pageContainer}>
            <Categories/>
        </div>
        </div>
        </>
    )
}
export default HomePage;


