import styles from "../Styles/EventStyles.module.css";

function EventGrid({ Events }) {
  return (
    <div className={styles.eventwrap}>
      <img src={Events.title} alt=" name" className={styles.img} />
    </div>
  );
}

export default EventGrid;
