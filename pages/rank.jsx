import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import styles from "../styles/Home.module.css";
import CardTraveler from "../src/components/cardTraveler";

export default function Rank() {
  return (
    <div className={styles?.container}>
      <Header title={process.env.APP_NAME + " | Rank dos maiores viajantes"} />
      <Menu />

      <main className={styles?.main}>
        <div className="container">
          <h1 className={styles?.title}>
            Rank de Atividades
          </h1>

          <CardTraveler></CardTraveler>
        </div>
      </main>

      <Footer />
    </div>
  );
}
