import { Fragment } from 'react';
import elipsis from '../../images/icon-ellipsis.svg';
import BackgroundImg from './BackgroundImg';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <Fragment>
      <BackgroundImg bgImg={props.bgImg} bgColor={props.bgColor} />
      <div className={styles.card}>
        <div className={styles.card__cont1}>
          <h2 className={styles.card__heading}>{props.activity}</h2>
          <p className={styles.card__time}>{props.time + 'hrs'}</p>
        </div>
        <div className={styles.card__cont2}>
          <img className={styles.card__img} src={elipsis} alt="elipsis icon" />
          <p className={styles.card__week}>
            Last {props.moment} {props.week + 'hrs'}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
