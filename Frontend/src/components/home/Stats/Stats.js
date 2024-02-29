import cn from "classnames";

import styles from "./Stats.module.scss";

const Stats = ({ title = "Get to know our platform",
    stats = [
        {
            title: "2,120+",
            description: "Volunteer hours"
        },
        {
            title: "14+",
            description: "Volunteer opportunity"
        },
        {
            title: "1,741+",
            description: "Child Life Services for Patients"
        },
        {
            title: "262+",
            description: "Beneficiaries of Child Life Services"
        }
    ] }) => {
    return (
        <section className={cn(styles.section, "space-X space-Y")}>
            <h1 className={cn(styles.heading, "head4-size  p-inline-2 mb-4")}>{title}</h1>
            <div className={cn(styles.statSection)}>
                {
                    stats.map((stat, i) => <div key={i} className={cn(styles.card, "pt-2 pb-2 ps-4 pe-4 color-white")}>
                        <div className="head2-size">{stat.title}</div>
                        <div className="paragraph3-size">{stat.description}</div>
                    </div>
                    )
                }
            </div>
        </section>
    );
}

export default Stats;