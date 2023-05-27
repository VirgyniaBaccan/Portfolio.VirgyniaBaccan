import { username } from '../../../data/user.js'
import banner from '../../../assets/banner-img.png'
import { Button } from '../../Button/index.jsx'
import styles from '../BannerSection/styles.module.css'

export const BannerSection = () => {
    return (
        <section className={styles.section}>
            <div>
                <h4>{username}</h4>
                <h1>Bem vindo ao meu portfólio</h1>
                <p>Uma frase interessante sobre mim</p>
                <Button>Saiba mais</Button> 
            </div>
            <img src={banner} alt='Imagem de um notebook com folhas roxas ao redor' />
        </section>
    )
}