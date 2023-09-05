import logo from "../../assets/portfolio.png";
import styles from "../Header/styles.module.css";
import { Button } from "../Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo do projeto portfolio, sendo a a palavra portfolio escrita em branco"
        />
        <div className={styles.container}>
          <a href="#section__aboutMe" className={styles.a}>
            Sobre
          </a>
          <a href="#section__stacks" className={styles.a}>
            Stack
          </a>
          <a href="#section__projects" className={styles.a}>
            Projetos
          </a>
        </div>
        <a href="https://www.linkedin.com/in/virgyniabaccan/">
          <Button>Contato</Button>
        </a>
      </nav>
    </header>
  );
};
