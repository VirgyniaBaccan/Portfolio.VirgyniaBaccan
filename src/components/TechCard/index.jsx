import styles from '../TechCard/styles.module.css'
import { technologies } from '../../data/technologies'

export const TechCard = () => {
    return (
        <ul className={styles.list}>
            {
                technologies.map((technology) => {
                    return (
                        <li key={technology.id} className={styles.li}>
                            <img className={styles.img} src={technology.img} />
                            <h3 className={styles.name}>{technology.name}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
}