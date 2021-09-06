import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles?.container}>
      <Header title={`${process.env.APP_NAME} | O lugar perfeito para alimentar o coração de todo viajante!`} />
      <Menu />

      <main className={styles?.main}>
        <div className="container">
          <h1 className={styles?.title}>
            Bem Vindo S2Traveler
          </h1>

          {/* <p className={styles?.description}> */}
          <p className="text-center">
            O local ideal para quem gosta de viajar e está sempre em busca de novos lugares!<br />
            Estamos em desenvolvimento
          </p>

          <Image src="/images/loading.gif" alt="Em desenvolvimento" width={ 400} height={ 300}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}
