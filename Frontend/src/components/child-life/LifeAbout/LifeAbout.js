import React from "react";
import cn from "classnames";

import styles from "./LifeAbout.module.scss";

const LifeAbout = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.lifeAboutText, "mb-2")}>
          <h1 className="color-purple mb-2">حياة الطفل</h1>
          <div className="paragraph4-size">
            تهدف برامج حياة الطفل، إلى الارتقاء بمستوى خدمات رعاية الأطفال
            المرضى وأسرهم في المستشفيات فاحصائيو حياة الطفل يمتلكون المؤهلات
            لدعم الأطفال وأسرهم من خلال ممارسات تعتبر في غاية الأهمية لسلامة
            الأطفال النفسية. فالأطفال يواجهون تحديات كبيرة اثناء رحلتهم العلاجية
            و التي يمكن أن تؤثر سلبًا على قدرتهم على التأقلم أثناء تلقيهم العلاج
            في المستشفى لشعورهم بالخوف والقلق وفقدان السيطرة والميل للعزلة، وهو
            ما قد يحدث أثار سلبية على صحتهم وسلامتهم الجسدية والنفسية.
          </div>
        </div>
        <div className={styles.lifeAboutImg}>
          <img src="/life_about.jpg" alt="" />
          {/* <img className={styles.vector} src="./svg/back_1.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default LifeAbout;
