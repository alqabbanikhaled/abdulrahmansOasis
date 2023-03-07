import React from "react";
import cn from "classnames";
import styles from "./Volunteer.module.scss";

const Volunteer = () => {
  return (
    <section className={cn(styles.section, "space-Y")}>
      <div className={cn(styles.container)}>
        <h1 className="color-blue mb-2 text-center space-X">
          ”خير الناس أنفعهم للناس“
        </h1>
        <div className={styles.volunteerImg}>
          <img src="/volunteer.jpg" alt="" />
        </div>
        <div className={cn(styles.volunteerText, "space-X")}>
          <p className="paragraph4-size text-center font-weight-medium color-blue mt-4">
            للتطوع فضلا إرسال ايميل <br />
            <a
              href="mailto:volunteers@abdulrahmanoasis.org"
              className="color-blue"
            >
              volunteers@abdulrahmanoasis.org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
