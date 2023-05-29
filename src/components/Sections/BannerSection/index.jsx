import { username } from '../../../data/user.js'
import banner from '../../../assets/banner-img.png'
import { Button } from '../../Button/index.jsx'
import styles from '../BannerSection/styles.module.css'

export const BannerSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.infos}>
                <h4 className={styles.user}>{username}</h4>
                <h1 className={styles.title}>Bem vindo ao meu portfólio</h1>
                <p className={styles.text}>Uma frase interessante sobre mim</p>
                <Button>Saiba mais</Button> 
            </div>
            <img className={styles.img} src={banner} alt='Imagem de um notebook com folhas roxas ao redor' />
        </section>
    )
}