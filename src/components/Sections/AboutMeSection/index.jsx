import styles from '../AboutMeSection/styles.module.css'

export const AboutMeSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.div}>
                <h2 className={styles.title} id='section__aboutMe'>Sobre mim</h2>
                <p className={styles.lorem} > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus,
                    dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget
                    sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.
                </p>
            </div>
        </section>
    )
}