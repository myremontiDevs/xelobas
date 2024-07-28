
import CraftsmenData from "./Datas/craftsmenData.json";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { useContext } from "react";
import { MainContext } from "../App";
import styles from "./Styles/CardParentsStyles.module.scss";
import CraftsmanCard from "./CraftsmanCard";

function FilteredCraftsmen() {
  const data: CraftsmenInterface[] = CraftsmenData;
  const context = useContext(MainContext);

  const {filterByCity, filterByDistrict, filterByProfession } = context;

  const filteredData = data.filter((craftsman) => {
    const matchesCity = filterByCity
    ? craftsman.city === filterByCity
    : true;
    const matchesDistrict = filterByDistrict
      ? craftsman.district === filterByDistrict
      : true;
    const matchesProfession = filterByProfession
      ? craftsman.profession === filterByProfession
      : true;
  
    return matchesCity && matchesDistrict && matchesProfession;
  });

 
  return (
    <div className={styles.parentContainer}>
      {filteredData.length === 0 ? (
        <div className={styles.emptyResult}>
          <h3>შერჩეული მონაცემებით ხელოსანი არ მოიძებნა!!!</h3>
        </div>
      ) : (
        <div className={styles.craftsmanContainer}>
          {filteredData.map((filteredCraftsman) => (
           <CraftsmanCard key={filteredCraftsman.userId} craftsman={filteredCraftsman} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FilteredCraftsmen;


