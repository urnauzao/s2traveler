import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import styles from "../styles/Home.module.css";
import CardTraveler from "../src/components/cardTraveler";

export default function OnderIr() {
  return (
    <div className={styles?.container}>
      <Header title={process.env.APP_NAME + " | Faça busca por locais ou receba as melhores recomendações"} />
      <Menu />

      <main className={styles?.main}>
        <div className="container">
          <h1 className="my-3">
            Lugares Para Conhecer
          </h1>
          <CardTraveler></CardTraveler>
        </div>
      </main>

      <Footer />
    </div>
  );
}
