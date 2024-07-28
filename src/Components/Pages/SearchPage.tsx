import DetailedSearch from "../DetailedSearch";
import SearchResults from "../SearchResults";
import styles from "../Styles/StylesForPages.module.scss";
import UseScrollToTheTop from "../Hooks/UseScrollsToTheTop";

function SearchPage (){
  UseScrollToTheTop();
    return(
        <>
        <div className={styles.parentContainer}>
      <div className={styles.mainContainer}>
      <DetailedSearch/>
      <SearchResults/>
      </div>
        </div>
        </>
    )
}
export default SearchPage;