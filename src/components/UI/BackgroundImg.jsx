import styles from './BackgroundImg.module.css';

const BackgroundImg = (props) => {
  return (
    <div className={`${styles.backimg} ${props.bgColor}`}>
      <img src={props.bgImg} alt="img" />
    </div>
  );
};

export default BackgroundImg;
