import styles from "./TextArea.module.scss";
import cn from "classnames";
const TextArea = ({ label, onChange, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.textAreaField}>
        <textarea
          className={styles.textArea}
          placeholder=" "
          onChange={onChange}
        />
        <label className={cn(styles.label, "color-gray-100")}>{label}</label>
      </div>
    </div>
  );
};

export default TextArea;
