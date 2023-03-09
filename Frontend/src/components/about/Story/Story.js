import React, { useEffect, useState } from "react";
import cn from "classnames";

import styles from "./Story.module.scss";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Story = () => {
  const [playing, setPlaying] = useState(false);
  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <section className={cn(styles.section, "space-X space-Y-bottom")}>
      <div className={cn(styles.container)}>
        <div className={styles.storyVideo}>
          <div className={styles.playerWrapper} onClick={handleClick}>
            <ReactPlayer
              className={styles.reactPlayer}
              url="./video2.mp4"
              light="./player_cover.jpg"
              playIcon={<PlayIcon />}
              playing={playing}
              controls={false}
              width="100%"
              height="100%"
            />
          </div>
          <img className={styles.vector} src="./svg/back_2.svg" alt="" />
        </div>
        <div className={cn(styles.storText, "mb-2")}>
          <h1 className="color-orange mb-2">قصة عبدالرحمن</h1>
          <div className="paragraph3-size color-gray">
            عبدالرحمن كان نهرا من الحب والعطاء اللا مشروط ، كان صديق المساكين
            والمحتاجين كان بشوشا متفائلا محبا للحياة ، فكان عند دخوله المنزل
            يبدأ بالسلام على العمالة ويحتفل بمناسبتهم ويسأل عن اطفالهم ، رغم صغر
            سنة إلا أنه علمنا دروسا في الوفاء والنبل . أسست هذه الواحة بعد رحيله
            ليستظل بها أطفالنا المرضى وأسرهم ، شفاهم الله
            <br /> <br />. تأسست جمعية حياة الطفل/ واحة عبدالرحمن في عام 2022
            بعد وفاة الشاب عبدالرحمن بن فهد بن ثنيان الثنيان رحمه الله في مقتبل
            عمره حيث أراد والديه تخليد ذکراه بعمل خيري يعود له بالثواب ويعم نفعه
            الأطفال المرضی شفاهم الله وأسرهم.. وقد اختير هذا التخصص لما فيه من
            تشابه لشخصية عبدالرحمن رحمه الله فمن يعرف عبدالرحمن يذهل بالبعد
            الإنساني الذي تتمحور عليه شخصية هذا الشاب ونظرته الإنسانية للآخرين
            وعطفه وحبه الخير منذ نعومة أظفاره حتی رحيله وحاجة المجتمع لمثل هذه
            الجمعية التي تهتم بنشر ثقافة حياة الطفل وتمکين أخصائيات حياة الطفل
            ببرامج التعليم والتدريب بالتعاون مع مستشفيات وجامعات محلية ودولية
            لتهيئة كوادر وطنية وضمان استدامة هذا التخصص الإنساني.
          </div>
        </div>
      </div>
    </section>
  );
};

const PlayIcon = () => {
  return (
    <div className={styles.playIcon}>
      <img src="./svg/play.svg" alt="" />
    </div>
  );
};

export default Story;
