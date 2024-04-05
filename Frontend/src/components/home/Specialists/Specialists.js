import cn from "classnames";

import styles from "./Specialists.module.scss";

const Specialists = ({
    data = {
        title: "Who are Child Life Specialists?",
        description: "A Child Life Specialist is a trained professional who works in healthcare and non-healthcare settings to support children and their families during medical procedures, hospitalizations, and other challenging experiences. In healthcare, their main role is to provide emotional and psychosocial support to children and help them cope with the stress and uncertainty associated with medical conditions and treatments.",
        subSections: [
            {
                image: "/specialists1.jpg",
                description: "Child Life Specialists use various techniques and strategies to create a child-friendly and therapeutic environment. They engage children in play, expressive arts, and other activities to help them understand their medical conditions, procedures, and treatments. They may use dolls, medical equipment, and other tools to explain medical procedures in a way that is understandable and less frightening for children."
            },
            {
                image: "/specialists2.jpg",
                description: "Child Life Specialists also collaborate with other healthcare professionals to advocate for the unique needs of children and provide education and support to parents and caregivers. They may assist in preparing children for surgeries or medical procedures, offering distraction techniques during painful or anxiety-provoking situations, and providing ongoing emotional support and therapeutic interventions."
            },
            {
                image: "/specialists3.jpg",
                description: "By addressing children's emotional, social, and developmental needs, child life specialists play a crucial role in reducing fear, anxiety, and trauma associated with healthcare experiences. The field of Child Life is dedicated to promoting the psychosocial well-being of children and their families during challenging medical experiences."
            }
        ]
    }
}) => {
    return (
        <>
            <section id="specialists" className={cn(styles.section,styles.first, "space-X space-Y color-white")}>
                <div className={styles.bg}>
                    <img src="/specialists-cover.jpg" />
                </div>
                <div className={styles.content}>
                    <h1 className="head4-size mb-2">{data.title}</h1>
                    <div className="paragraph4-size">{data.description}</div>
                </div>
            </section>
            {
                data.subSections.map((sec, o) => <section key={o} className={cn(styles.section, styles.sub,"space-X space-Y-top",{
                    [styles.rev]: o%2 === 0,
                    ['space-Y-minor-bottom']: o === data.subSections.length-1
                })}>
                    <div className={styles.content}>
                        <div className="paragraph4-size">{sec.description}</div>
                    </div>
                    <div className={styles.image}>
                        <img src={sec.image} />
                    </div>
                </section>)
            }</>
    );
}

export default Specialists;