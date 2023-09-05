import styles from "../AboutMeSection/styles.module.css";

export const AboutMeSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <h2 className={styles.title} id="section__aboutMe">
          Sobre mim
        </h2>
        <p className={styles.text}>
          Olá! Sou a Vi. O que começou como uma simples curiosidade logo se
          transformou em uma paixão pelo universo da tecnologia. A transição
          para o desenvolvimento web foi um passo natural e desde então entrei
          em um processo constante de aprendizado e evolução. Sempre ansiosa
          para abraçar novos desafios, acredito na importância da comunicação
          eficaz em qualquer projeto e estou disposta a trabalhar em equipe para
          alcançar resultados excepcionais.
        </p>
      </div>
    </section>
  );
};
