
import styles from "./Styles/CardParentsStyles.module.scss";
import { useContext } from "react";
import CraftsmenData from "./Datas/craftsmenData.json";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { MainContext } from "../App";
import CraftsmanCard from "./CraftsmanCard";

function SearchResults(){
    const data: CraftsmenInterface[] = CraftsmenData;
    const context = useContext(MainContext);

      const {searchByCity, searchByDistrict, searchByProfession, searchByVerification, searchByExperience, searchByPriceFrom, searchByPriceUpTo} = context;

    
      
      const SearchedData = data.filter((craftsman)=>{
        const experienceNumberArray = searchByExperience.map(Number); 

        const matchesCity = searchByCity ? craftsman.city === searchByCity : true;
        const matchesDistrict = searchByDistrict ? craftsman.district === searchByDistrict : true;
        const matchesProfession = searchByProfession ? craftsman.profession === searchByProfession : true;
        const matchesVerification = searchByVerification ? craftsman.verificationStatus === searchByVerification : true;
       
        const matchespriceFrom = searchByPriceFrom ? +craftsman.price >= +searchByPriceFrom : true;
        const mathesPriceUpTo = searchByPriceUpTo ? +craftsman.price <= +searchByPriceUpTo : true;

        const matchesExperience = searchByExperience.length > 0 ? +craftsman.experience >= experienceNumberArray[0] &&
        +craftsman.experience <= experienceNumberArray[experienceNumberArray.length -1] : true;

        return matchesCity && matchesDistrict && matchesProfession && matchesVerification && matchespriceFrom && mathesPriceUpTo && matchesExperience;
      })

    return(
        <div className={styles.parent}>
            {SearchedData.length === 0 ? (
        <div className={styles.emptyResult}>
          <h3>შერჩეული მონაცემებით ხელოსანი არ მოიძებნა!!!</h3>
        </div>
      ) : (
        <div className={styles.craftsmanContainer}>
          {SearchedData.map((searchedCraftsman) => (
           <CraftsmanCard key={searchedCraftsman.userId} craftsman={searchedCraftsman} />
          ))}
        </div>
      )}
        </div>
    )
}

export default SearchResults;


