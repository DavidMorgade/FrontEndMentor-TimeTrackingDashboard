import { ProfileImg } from '../../images/index';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img className={styles.profile__img} src={ProfileImg} alt="Profile Img" />
      <p className={styles.profile__text}>
        Report for <span> Jeremy Robson </span>
      </p>
    </div>
  );
};

export default Profile;
