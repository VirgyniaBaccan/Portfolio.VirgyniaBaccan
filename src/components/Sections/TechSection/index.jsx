import { TechCard } from "../../TechCard"
import styles from "../TechSection/styles.module.css"

export const TechSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.div}>
                <h2 className={styles.title} id='section__stacks'>Tecnologias</h2>
                <TechCard />
            </div>
        </section>
    )
}