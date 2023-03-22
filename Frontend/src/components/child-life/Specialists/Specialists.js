import React, { useState } from "react";
import cn from "classnames";

import PlayIcon from "./../../PlayIcon/PlayIcon";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import styles from "./Specialists.module.scss";

const Specialists = ({ data = {} }) => {
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <section className={cn(styles.section, "space-Y-bottom")}>
      <div className={cn(styles.container, "bg-1 text-center")}>
        <div className={cn(styles.spText, "space-Y-top space-X-l mb-4")}>
          <h1 className="color-purple">{data.title}</h1>
          <div className="paragraph4-size color-gray">{data.description}</div>
        </div>
        <div className={cn(styles.spVideo, "space-X")}>
          <div className={styles.playerWrapper} onClick={handleClick}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={data.video?.data.attributes.url}
              light={data.videoCover?.data.attributes.url}
              playIcon={
                <PlayIcon bgColor={"bg-2"} iconSrc={"/svg/play_2.svg"} />
              }
              playing={playing}
              controls={false}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
