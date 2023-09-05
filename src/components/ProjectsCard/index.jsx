import styles from '../ProjectsCard/styles.module.css'
import { projects } from '../../data/projects'
import gitIcon from '../../assets/git-icon.png'

export const ProjectsCard = () => {
    return (
        <ul className={styles.list}>
            {
                projects.map((project) => {
                    return (
                        <li key={project.name} className={styles.li}>
                            <div className={styles.div}>
                                <h4 className={styles.name}>{project.name}</h4>
                                <img src={gitIcon} alt='Ícone GitHub' />
                            </div>
                            <p className={styles.description}>{project.descricao}</p>
                            <a className={styles.link} href={project.link}>Saiba mais</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}