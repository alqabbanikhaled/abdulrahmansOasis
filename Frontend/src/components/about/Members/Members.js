import React from "react";
import cn from "classnames";

import styles from "./Members.module.scss";
import { MEMBERS } from "./Members.data";

const Members = () => {
  return (
    <section className={cn(styles.section, "space-X-l space-Y")}>
      <div className={cn(styles.container)}>
        <h1 className="color-purple mb-2 text-center">الأعضاء المؤسسين</h1>
        <div className={cn(styles.membersItems)}>
          {MEMBERS.map(({ title, name, position }) => (
            <MemeberItem title={title} name={name} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemeberItem = ({ title, name, position }) => {
  return (
    <div className={cn(styles.memeberItem, "bg-1 pt-2 pb-2 ps-4 pe-4")}>
      <div className="paragraph1-size color-gray">{title}</div>
      <div className="paragraph3-size font-weight-medium">{name}</div>
      <div className="paragraph1-size color-gray">{position}</div>
    </div>
  );
};

export default Members;
