import styles from './TimeSelector.module.css';

const TimeSelector = (props) => {
  return (
    <div className={styles.timeContainer}>
      <button
        onClick={props.day}
        className={`${styles.time}`}
        style={props.active === 'daily' ? { color: 'white' } : null}
      >
        Daily
      </button>
      <button
        onClick={props.week}
        className={styles.time}
        style={props.active === 'weekly' ? { color: 'white' } : null}
      >
        Weekly
      </button>
      <button
        onClick={props.month}
        className={styles.time}
        style={props.active === 'monthly' ? { color: 'white' } : null}
      >
        Monthly
      </button>
    </div>
  );
};

export default TimeSelector;
