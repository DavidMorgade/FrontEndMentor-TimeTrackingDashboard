import Profile from './Profile';
import TimeSelector from './TimeSelector';
import styles from './ProfileCard.module.css';
const ProfileCard = (props) => {
  return (
    <div className={styles.profileCard}>
      <Profile />
      <TimeSelector
        active={props.active}
        day={props.day}
        week={props.week}
        month={props.month}
      />
    </div>
  );
};

export default ProfileCard;
