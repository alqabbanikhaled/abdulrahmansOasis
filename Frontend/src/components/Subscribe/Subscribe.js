import cn from "classnames";
import styles from "./Subscribe.module.scss";
import Button from "./../Button/Button";
import { subscribeDataAR, subscribeDataEN } from "./Subscribe.data";

const Subscribe = ({ locale }) => {
  const { placeholder, subscribBtnText } =
    locale == "ar" ? subscribeDataAR : subscribeDataEN;

  return (
    <form className={styles.formFeilds}>
      <input
        className={cn(styles.input, "p-1 paragraph1-size color-dark-gray")}
        type="email"
        name=""
        id=""
        placeholder={placeholder}
      />
      <Button className="purple-bg color-white">{subscribBtnText}</Button>
    </form>
  );
};

export default Subscribe;
