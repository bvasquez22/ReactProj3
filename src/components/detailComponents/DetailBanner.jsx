import styles from "../homeComponents/Home.module.css";

const DetailBanner = ({ image, title }) => {
  const backgroundString = `--background.url(${image})`;

  return (
    <div
      className={styles.ad_banner}
      style={{
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`,
        marginBottom: '25px',
      }}
    >
      <div className={styles.ad_text}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default DetailBanner;
