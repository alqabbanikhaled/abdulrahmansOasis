import cn from "classnames";

import styles from "./Contribute.module.scss";

const Contribute = ({
    data = {
        title: "Who are Child Contribute?",
        description: "A Child Life Specialist is a trained professional who works in healthcare and non-healthcare settings to support children and their families during medical procedures, hospitalizations, and other challenging experiences. In healthcare, their main role is to provide emotional and psychosocial support to children and help them cope with the stress and uncertainty associated with medical conditions and treatments.",
        subSections: [
            {
                image: "/slide_img_3.jpg",
                description: "Child Life Contribute use various techniques and strategies to create a child-friendly and therapeutic environment. They engage children in play, expressive arts, and other activities to help them understand their medical conditions, procedures, and treatments. They may use dolls, medical equipment, and other tools to explain medical procedures in a way that is understandable and less frightening for children."
            },
            {
                image: "/importance.jpg",
                description: "Child Life Contribute also collaborate with other healthcare professionals to advocate for the unique needs of children and provide education and support to parents and caregivers. They may assist in preparing children for surgeries or medical procedures, offering distraction techniques during painful or anxiety-provoking situations, and providing ongoing emotional support and therapeutic interventions."
            }
        ]
    }
}) => {
    return (
        <>
            <section className={cn(styles.section, "space-X space-Y color-white")}>
                <div className={styles.content}>
                    <h1 className="head4-size mb-2">{data.title}</h1>
                    <div className="paragraph4-size">{data.description}</div>
                </div>
            </section>
        </>
    );
}

export default Contribute;