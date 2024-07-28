
import styles from "../Components/Styles/CardParentsStyles.module.scss";
import CraftsmenData from "./Datas/craftsmenData.json";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { useParams } from "react-router-dom";
import CraftsmanCard from "./CraftsmanCard";

function CategoryPage() {
  const { title } = useParams<{ title: string }>();
  const data: CraftsmenInterface[] = CraftsmenData.filter(
    (craftsman) => craftsman.profession === title
  );

  return (
    <div className={styles.parentContainer}>
      <div className={styles.craftsmanContainer}>
        {data.map((craftsman) => (
          <CraftsmanCard key={craftsman.userId} craftsman={craftsman} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
