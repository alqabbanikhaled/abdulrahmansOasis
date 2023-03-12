import cn from "classnames";
import styles from "./PlayIcon.module.scss";

const PlayIcon = ({ iconSrc, bgColor }) => {
  return (
    <div className={cn(styles.playIcon, bgColor)}>
      <img src={iconSrc} alt="" />
    </div>
  );
};

export default PlayIcon;
