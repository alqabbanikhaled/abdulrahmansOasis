import React from "react";
import cn from "classnames";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={styles.aboutText}>
          <h1 className="color-purple mb-3">واحة عبدالرحمن</h1>
          <div className="paragraph4-size font-weight-bold">
            تأسست جمعیة حیاة الطفل/ واحة عبدالرحمن بعد وفاة الشاب عبدالرحمن بن
            فهد بنثنیان الثنیان في مقتبل عمره؛ حیث أراد والدیه تخلید ذکراه بعمل
            خیري یعود لهبالثواب ویعم نفعه للأطفال المرضی شفاهم الله وأسرهم
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img src="./Abdulrahman_img.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
