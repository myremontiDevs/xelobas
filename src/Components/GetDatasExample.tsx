import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Styles/GetDatasExample.module.scss";

type dataTypes = {
  userID?: string;
  setDate: string;
  status?: string;//
  name: string;
  lastName?: string;
  personalId?: string;
  phoneNumber?: string;
  email?: string;
  password?: string;
  city?: string;
  district?: string;
  profession?: string;
  experience?: string;
  price?: string;//
  minCallFee?: string;
  moreInformation?: string;//
  profileImgs: string;
};

function GetDatasExample() {
  const [data, setData] = useState<dataTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data.json');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.parent}>
      {data.map((user) => (
        <div key={user.userID}>
        <p>{user.name}</p>
          <p>{user.district}</p>
          <img src={user.profileImgs} alt="ggh" />
        </div>
      ))}
    </div>
  );
}

export default GetDatasExample;


