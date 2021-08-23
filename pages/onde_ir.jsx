import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import styles from "../styles/Home.module.css";

export default function OnderIr() {
  return (
    <div className={styles?.container}>
      <Header title={process.env.APP_NAME + " | Faça busca por locais ou receba as melhores recomendações"} />
      <Menu />

      <main className={styles?.main}>
        <div className="container">
          <h1 className={styles?.title}>
            Rank de Atividades
          </h1>

          <p className={styles?.description}>
            Um sistema desenvolvido para simular o lucro por vendas em marketplaces!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}