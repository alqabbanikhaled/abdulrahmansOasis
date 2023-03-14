import React from "react";
import cn from "classnames";
import styles from "./Volunteer.module.scss";
import { volunteerDataAR, volunteerDataEN } from "./Volunteer.data";

const Volunteer = ({ locale }) => {
  const { title, sendEmail } =
    locale == "ar" ? volunteerDataAR : volunteerDataEN;

  return (
    <section className={cn(styles.section, "space-Y")}>
      <div className={cn(styles.container)}>
        <h1 className="color-blue mb-2 text-center space-X">{title}</h1>
        <div className={styles.volunteerImg}>
          <img src="/volunteer.jpg" alt="" />
        </div>
        <div className={cn(styles.volunteerText, "space-X")}>
          <h4 className="text-center font-weight-medium color-blue mt-4">
            {sendEmail} <br />
            <a
              href="mailto:volunteers@abdulrahmanoasis.org"
              className="color-blue"
            >
              volunteers@abdulrahmanoasis.org
            </a>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
