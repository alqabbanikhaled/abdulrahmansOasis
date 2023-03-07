import React from "react";
import cn from "classnames";
import styles from "./Calender.module.scss";
import Button from "./../../Button/Button";

const Calender = () => {
  return (
    <section className={cn(styles.section, "space-X-l space-Y-bottom")}>
      <div className={cn(styles.container)}>
        <h3 className="text-center color-black mb-3">تقويمنا</h3>
        <div className={cn(styles.calenderEvents, "mb-2")}>
          <Event
            className="bg-1 color-purple"
            description="ذكرى انطلاق مؤسسة واحة عبدالرحمن"
            day="23"
            month="يناير"
          />
          <Event
            className="bg-2 color-orange"
            description="شهر التوعية بتخصص حياة الطفل"
            day="23"
            month="يناير"
          />
          <Event
            className="bg-1 color-purple"
            description="ذكرى انطلاق مؤسسة واحة عبدالرحمن"
            day="23"
            month="يناير"
          />
          <Event
            className="bg-2 color-orange"
            description="شهر التوعية بتخصص حياة الطفل"
            day="23"
            month="يناير"
          />
        </div>
        <div className={styles.button}>
          <Button className="purple-bg color-white">شاهد المزيد</Button>
        </div>
      </div>
    </section>
  );
};

const Event = ({ className, description, day, month }) => {
  return (
    <div className={cn(styles.event, "p-3", className)}>
      <h4>{description}</h4>
      <div className={cn(styles.date)}>
        <h1 className="paragraph12-size">{day}</h1>
        <div className="paragraph3-size font-weight-bold">{month}</div>
      </div>
    </div>
  );
};

export default Calender;
