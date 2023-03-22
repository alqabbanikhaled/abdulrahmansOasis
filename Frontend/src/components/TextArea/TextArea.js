import styles from "./TextArea.module.scss";
import cn from "classnames";
const TextArea = ({ label, className, value, onChange, locale }) => {
  return (
    <div
      className={cn(
        styles.container,
        { [styles.ar]: locale == "ar" },
        className
      )}
    >
      <div className={styles.textAreaField}>
        <textarea
          value={value}
          onChange={onChange}
          className={styles.textArea}
          placeholder=" "
        />
        <label className={cn(styles.label, "color-gray-100")}>{label}</label>
      </div>
    </div>
  );
};

export default TextArea;
