import logo from '../../assets/portfolio.png'
import styles from '../Header/styles.module.css'
import { Button } from '../Button'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='Logo do projeto portfolio, sendo a a palavra portfolio escrita em branco' />
            <nav className={styles.menu}>
                <a href='#section__aboutMe' className={styles.text}>Sobre</a>
                <a href='#section__stacks' className={styles.text}>Stack</a>
                <a href='#section__projects' className={styles.text}>Projetos</a>   
            </nav>
            <Button>Contato</Button> 
          
        </header>
    )
}