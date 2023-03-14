import React, { useState } from "react";
import cn from "classnames";

import PlayIcon from "./../../PlayIcon/PlayIcon";
import { GALLERY_LIST } from "./Gallery.data";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <section className={cn(styles.section, "space-X space-Y-bottom bg-7")}>
      <div className={cn(styles.container)}>
        <h3 className="color-green mb-2 text-center">معرض الوسائط</h3>
        <div className={cn(styles.galleryItems)}>
          {GALLERY_LIST.map(({ videoUrl, coverUrl, title }) => (
            <GalleryItem
              videoUrl={videoUrl}
              coverUrl={coverUrl}
              title={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryItem = ({ title, coverUrl, videoUrl }) => {
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    setPlaying(!playing);
  };
  return (
    <div className={cn(styles.galleryItem)}>
      <div className={styles.playerWrapper} onClick={handleClick}>
        <ReactPlayer
          className={styles.reactPlayer}
          url={videoUrl}
          light={coverUrl}
          playIcon={<PlayIcon bgColor={"bg-3"} iconSrc={"/svg/play_3.svg"} />}
          playing={playing}
          controls={false}
          width="100%"
          height="100%"
        />
      </div>

      {!playing && (
        <>
          {/* <div className={styles.overlay} /> */}
          <div
            className={cn(
              styles.title,
              "color-white paragraph4-size font-weight-medium text-center"
            )}
          >
            <span>{title}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
