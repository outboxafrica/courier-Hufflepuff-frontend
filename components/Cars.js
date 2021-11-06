import Singlecar from "./Singlecar";
import styles from "../styles/Home.module.css";

function Cars({ data }) {
  console.log(data);
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <div key={index}>
          <Singlecar item={item} />
        </div>
      ))}
    </div>
  );
}

export default Cars;
