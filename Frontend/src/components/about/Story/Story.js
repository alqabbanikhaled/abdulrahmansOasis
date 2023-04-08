import React, { useEffect, useState } from "react";
import cn from "classnames";

import PlayIcon from "./../../PlayIcon/PlayIcon";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import styles from "./Story.module.scss";

const Story = ({ locale, data = {} }) => {
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setPlaying(!playing);
};

  return (
    <section
      id="story"
      className={cn(
        styles.section,
        { [styles.ar]: locale == "ar" },
        "space-X space-Y-bottom space-Y-top"
      )}
    >
      <div className={cn(styles.container)}>
        <div className={cn(styles.storText, "mb-2")}>
          <h1 className="color-orange mb-2">{data.title}</h1>
          <div className="paragraph3-size color-gray">{data.description}</div>
        </div>
        <div className={styles.storyVideo}>
          <div className={styles.playerWrapper} onClick={handleClick}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={data.media?.data.attributes.url}
              light={data.videoCover?.data.attributes.url}
              playIcon={<PlayIcon bgColor={"bg-2"} iconSrc={"/svg/play.svg"} />}
              playing={playing}
              controls={false}
              width="100%"
              height="100%"
            />
          </div>
          {/* <img className={styles.vector} src="/svg/back_2.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Story;
