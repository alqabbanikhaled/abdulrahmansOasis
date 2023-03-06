import React from "react";
import cn from "classnames";
import styles from "./Volunteer.module.scss";

const Volunteer = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y bg-2")}>
      <div className={cn(styles.container)}>
        <h2 className="color-orange mb-3">خير الناس أنفعهم للناس</h2>
        <div className={styles.VolunteerImg}>
          <img src="/volunteer.png" alt="" />
        </div>
        <p className="paragraph4-size text-center font-weight-medium color-black mt-4">
          للتطوع معنا فضلا ارسل ايميل على <br />
          Lorem.ipsum@abdulrahmanoasis.org
        </p>
      </div>
    </section>
  );
};

export default Volunteer;
