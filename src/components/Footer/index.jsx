import linkedin from "../../assets/in.green.png";
import { user } from "../../data/user.js";
import styles from "../Footer/styles.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.divFooter}>
        <div className={styles.div}>
          <div className={styles.divTitle}>
            <div className={styles.contacts}>
              <h2 className={styles.title} id="footer__contacts">
                Contato
              </h2>
              <a href="https://www.linkedin.com/in/virgyniabaccan/" target="_blank">
                <img src={linkedin} alt="Ícone LinkedIn"/>
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <p>Todos os direitos reservados - {user}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
