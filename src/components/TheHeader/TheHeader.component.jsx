import styles from "./TheHeader.module.css";
const TheHeader = () => {
  return (
    <header>
      <div>
        <h1 className={styles.title}>W.A.T.E.R</h1>
      </div>
      <div className={styles.icons}>
        <button>History</button>
        <button>User</button>
      </div>
    </header>
  );
};
export default TheHeader;
