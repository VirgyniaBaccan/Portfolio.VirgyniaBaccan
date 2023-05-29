import linkedin from '../../assets/linkedin-icon.png'
import whatsapp from '../../assets/whatsapp-icon.png'
import github from '../../assets/github-icon.png'
import { user } from '../../data/user.js'
import styles from '../Footer/styles.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.divFooter}>
                <div className={styles.div}>
                    <div className={styles.divTitle}>
                        <h2 className={styles.title} id='footer__contacts'>Contato</h2>
                        <div className={styles.contacts}>
                            <img src={whatsapp} alt="Ícone WhatsApp" />
                            <img src={linkedin} alt="Ícone LinkedIn" />
                            <img src={github} alt="Ícone GitHub" />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <p>Todos os direitos reservados -</p>
                        <p>{user}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}