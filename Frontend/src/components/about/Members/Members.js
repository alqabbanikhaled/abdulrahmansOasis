import React from "react";
import cn from "classnames";

import styles from "./Members.module.scss";
import { MEMBERS } from "./Members.data";

const Members = ({ data = {} }) => {
  return (
    <section id="members" className={cn(styles.section, "space-X-l space-Y")}>
      <div className={cn(styles.container)}>
        <h1 className="color-red mb-2 text-center">{data.title}</h1>
        <div className={cn(styles.membersItems)}>
          {data.membersItems?.map(({ title, name, position }, i) => (
            <MemeberItem
              key={i}
              title={title}
              name={name}
              position={position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemeberItem = ({ title, name, position }) => {
  return (
    <div className={cn(styles.memeberItem, "pt-2 pb-2 ps-4 pe-4")}>
      <div className="paragraph1-size color-black">{title}</div>
      <div className="paragraph3-size font-weight-medium">{name}</div>
      <div className="paragraph1-size color-black">{position}</div>
    </div>
  );
};

export default Members;
