import { username } from "../../../data/user.js";
import banner from "../../../assets/banner.png";
import { Button } from "../../Button/index.jsx";
import styles from "../BannerSection/styles.module.css";

export const BannerSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.infos}>
        <h4 className={styles.user}>{username}</h4>
        <h1 className={styles.title}>Bem-vindo(a) ao meu portfólio</h1>
        <p className={styles.text}>Desenvolvedora Frontend Jr.</p>
        <a href="https://github.com/VirgyniaBaccan" target="_blank">
          <Button>Saiba mais</Button>
        </a>
      </div>
      <img
        className={styles.img}
        src={banner}
        alt="Imagem de um notebook com folhas roxas ao redor"
      />
    </section>
  );
};
