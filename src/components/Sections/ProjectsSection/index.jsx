import { ProjectsCard } from '../../ProjectsCard'
import styles from '../ProjectsSection/styles.module.css'

export const ProjectsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.div}>
                <h2 className={styles.title} id='section__projects'>Projetos</h2>
                <ProjectsCard />
            </div>
        </section>
    )
}