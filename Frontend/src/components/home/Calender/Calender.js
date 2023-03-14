import React from "react";
import cn from "classnames";
import styles from "./Calender.module.scss";
import { calenderDataAR, calenderDataEN } from "./Calender.data";

const Calender = ({ locale }) => {
  const { title, CALENDER_EVENTS } =
    locale == "ar" ? calenderDataAR : calenderDataEN;
  return (
    <section
      id="calender"
      className={cn(styles.section, "space-X-l space-Y-bottom")}
    >
      <div className={cn(styles.container)}>
        <h3 className="text-center color-black mb-3">{title}</h3>
        <div className={cn(styles.calenderEvents, "mb-2")}>
          {CALENDER_EVENTS.map((event, i) => (
            <Event
              className={event.className}
              description={event.description}
              date={event.date}
            />
          ))}
        </div>
        {/* <div className={styles.button}>
          <Button className="purple-bg color-white">شاهد المزيد</Button>
        </div> */}
      </div>
    </section>
  );
};

// const Event = ({ className, description, day, month }) => {
//   return (
//     <div className={cn(styles.event, "p-3", className)}>
//       <h4>{description}</h4>
//       <div className={cn(styles.date)}>
//         <h1 className="paragraph12-size">{day}</h1>
//         <div className="paragraph3-size font-weight-bold">{month}</div>
//       </div>
//     </div>
//   );
// };

const Event = ({ className, description, date }) => {
  return (
    <div className={cn(styles.event, "p-3 text-center", className)}>
      <h4>{description}</h4>
      <p className="paragraph3-size font-weight-bold color-gray">{date}</p>
    </div>
  );
};

export default Calender;
