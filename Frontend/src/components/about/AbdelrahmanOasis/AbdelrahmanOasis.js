import React from "react";
import cn from "classnames";

import styles from "./AbdelrahmanOasis.module.scss";

const AbdelrahmanOasis = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.AOText, "mb-2")}>
          <h1 className="color-purple mb-2">واحة عبدالرحمن</h1>
          <div className="paragraph4-size">
            تأسست جمعیة حیاة الطفل/ واحة عبدالرحمن بعد وفاة الشاب عبدالرحمن بن
            فهد بنثنیان الثنیان في مقتبل عمره؛ حیث أراد والدیه تخلید ذکراه بعمل
            خیري یعود لهبالثواب ویعم نفعه للأطفال المرضی شفاهم الله وأسرهم
          </div>
        </div>
        <div className={styles.AOImg}>
          <img src="./Abdulrahman_img.jpg" alt="" />
          <img className={styles.vector} src="./svg/back_1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AbdelrahmanOasis;
