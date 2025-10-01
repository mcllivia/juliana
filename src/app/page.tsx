import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv1wkgNWnMF3W0DKuA2XBFKSvP6QHgTD1HWg&s" 
          alt="Campanha de Vacinação" 
        />
        <h1>Bem-vindo à Campanha de Vacinação</h1>
        <p>Proteja-se e proteja quem você ama.
          <br /> Vacine-se!</p>
        <div className="ctas">
       
        </div>
      </main>
    </div>
  );
}
