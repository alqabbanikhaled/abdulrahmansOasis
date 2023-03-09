import React, { useState } from "react";
import cn from "classnames";

import styles from "./Specialists.module.scss";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Specialists = () => {
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    setPlaying(!playing);
  };
  return (
    <section className={cn(styles.section, "space-Y-bottom")}>
      <div className={cn(styles.container, "bg-1 text-center")}>
        <div className={cn(styles.spText, "space-Y-top space-X-l mb-4")}>
          <h1 className="color-purple">أخصائيو حياة الطفل</h1>
          <div className="paragraph4-size color-gray">
            هم مقدمي رعاية صحية معتمدين يعملون في المستشفيات في مناطق التنويم
            والطوارئ والأشعة وأماكن العلاج الوريدي لتخفيف القلق والألم عند
            الأطفال فهم يعلمون الأطفال مهارات التكيف والتعايش والتهيئة للإجراءات
            الطبية مثل العمليات والعلاج الوريدي.
          </div>
        </div>
        <div className={cn(styles.spVideo, "space-X")}>
          <div className={styles.playerWrapper} onClick={handleClick}>
            <ReactPlayer
              className={styles.reactPlayer}
              url="./video3.mp4"
              light="./specialists_cover.jpg"
              playIcon={<PlayIcon />}
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

const PlayIcon = () => {
  return (
    <div className={styles.playIcon}>
      <img src="./svg/play_2.svg" alt="" color="white" />
    </div>
  );
};
export default Specialists;
