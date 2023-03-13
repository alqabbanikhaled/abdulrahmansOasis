import cn from "classnames";
import styles from "./Subscribe.module.scss";
import Button from "./../Button/Button";

const Subscribe = () => {
  return (
    <form className={styles.formFeilds}>
      <input
        className={cn(styles.input, "p-1 paragraph1-size color-dark-gray")}
        type="email"
        name=""
        id=""
        placeholder="ادخل بريدك الإلكتروني"
      />
      <Button className="purple-bg color-white">اشتراك</Button>
    </form>
  );
};

export default Subscribe;
