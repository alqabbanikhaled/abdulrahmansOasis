import React from "react";
import cn from "classnames";

import styles from "./LifeImportance.module.scss";

const LifeImportance = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.text, "mb-2")}>
          <h1 className="color-green mb-2">أهمية خدمات برامج حياة الطفل</h1>
          <div className="paragraph3-size color-gray mb-2">
            كشفت الأكاديمية الأمريكية لطب الأطفال،عن الأبحاث التي أجريت على
            خدمات برامج حياة الطفل على النحو الآتي:
          </div>
          <div className={styles.items}>
            <Item
              num="1"
              title="يمكن تقليل الاضطرابات  الفسيولوجية، مثل الحركة المفرطة للجسم، وتسارع ضربات القلب، وارتفاع ضغط الدم، من خلال الاستعانة بتدخلات اللعب العلاجي من قبل اخصائيو  حياة الطفل."
            />
            <Item
              num="2"
              title="تؤدي تدخلات برامج حياة الطفل إلى تقليل الشعور بالقلق و التأقلم أثناء الإقامة بالمستشفى، وفهم أوضح ومبسط للتشخيص والاجراءات  الطبية، بالإضافة إلى تعديل سلوكيات الأطفال بعد خروجهم من المستشفى."
            />
            <Item
              num="3"
              title="يساعد اخصائيو  حياة الطفل في تسهيل تأقلم الأسرة مع مرض الطفل وتجربة الرعاية الصحية من خلال توفير الدعم النفسي والاجتماعي واستراتيجيات التأقلم للأسرة وخاصة الأشقاء."
            />
          </div>
        </div>
        <div className={styles.img}>
          <img src="/life_importance.jpg" alt="" />
          {/* <img className={styles.vector} src="./svg/back_1.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

const Item = ({ num, title }) => {
  return (
    <div className={cn(styles.Item, "mb-2")}>
      <h3 className="color-green">{num}</h3>
      <div className="paragraph1-size">{title}</div>
    </div>
  );
};

export default LifeImportance;
