import React from "react";
import cn from "classnames";

import styles from "./Goals.module.scss";
import { goalsDataAR, goalsDataEN } from "./Goals.data";

const Goals = ({ locale }) => {
  const { title, GOALS_ITEMS } = locale == "ar" ? goalsDataAR : goalsDataEN;

  return (
    <section className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.goalsText, "mb-2")}>
          <h1 className="color-green mb-2">{title}</h1>
          <div className={styles.goals}>
            {GOALS_ITEMS.map((item, i) => (
              <GoalItem num={i + 1} title={item} />
            ))}
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
      <div className="paragraph3-size font-weight-medium">{title}</div>
    </div>
  );
};

export default Goals;
