import cn from "classnames";

import styles from "./Goals.module.scss";

const Goals = ({ title = "Goals of Abdulrahman's Oasis Foundation",
    goals = [
        {
            title: "Raise Awareness",
            description: "Raise Awareness about the Child Life Profession."
        },
        {
            title: "Incorporation",
            description: "Incorporate Child Life Profession in Children's Hospitals."
        },
        {
            title: "Collaboration",
            description: "Collaborate with Academic Organizations to Establish Educational Programs in Child Life."
        },
        {
            title: "Partnership",
            description: "Partner with Individuals and Organizations to Enhance Child Life Clinical Training."
        },
        {
            title: "Engagement",
            description: "Engage in Promoting Child-Friendly Healthcare Facilities."
        }
    ] }) => {
    return (
        <section id="goals" className={cn(styles.timeline, "space-X space-Y color-white")}>
            <h1 className={cn(styles.timeline__heading, "head4-size  p-inline-2")}>{title}</h1>
            <div className={cn(styles.timeline__section)}>
                {
                    goals.map((goal, i) => <div className={cn(styles.timeline__point, styles.timeline__gutter, "row   mt-5")}>
                        <div key={i} className={cn(styles.pointsec, styles.content)}>
                            <div className={styles.card}>
                                <h2 className={cn(styles.timeline__title, "head5-size font-weight-medium")}>{goal.title}</h2>
                                <p className={cn(styles.timeline__text, "paragraph4-size")}>{goal.description}</p>
                            </div>
                        </div>
                        <div className={cn(styles.pointsec)}>
                        </div>
                    </div>
                    )
                }
            </div>
        </section>
    );
}

export default Goals;