import React from "react";
import cn from "classnames";

import styles from "./Goals.module.scss";

const Goals = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.goalsText, "mb-2")}>
          <h1 className="color-green mb-2">
            أهداف جمعية <br />
            واحة عبدالرحمن
          </h1>
          <div className={styles.goals}>
            <GoalItem num="1" title="نشر الوعي والتثقيف بتخصص حياة الطفل" />
            <GoalItem
              num="2"
              title="العمل على ادراج تخصص حياة الطفل في هيكلة مستشفيات الأطفال"
            />
            <GoalItem
              num="3"
              title="العمل مع جامعات محلية لتقديم برامج دراسات عليا في هذا التخصص ومستشفيات دولية رائدة في التخصص للتدريب الميدان"
            />
            <GoalItem
              num="4"
              title="برنامج تحقيق أمنيات الأطفال المرضى شفاهم الله"
            />
          </div>
        </div>
        <div className={styles.goalsImg}>
          <img src="./goals.jpg" alt="" />
          <img className={styles.vector} src="./svg/back_1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

const GoalItem = ({ num, title }) => {
  return (
    <div className={cn(styles.goalItem, "mb-2")}>
      <h3 className="color-green">{num}</h3>
      <div className="paragraph3-size font-weight-bold">{title}</div>
    </div>
  );
};

export default Goals;
