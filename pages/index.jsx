import { useState, useEffect } from "react";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Menu from "../src/components/menu";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "../styles/Home.module.css";
import Image from "next/image";
import useSwr from "swr";
import { urlGetLugares } from "../src/repository/Lugares";
import fetcher from "../src/services/HttpRequestService";
import { TabView, TabPanel } from "primereact/tabview";
import {
  urlGetCidades,
  urlGetEstados,
  urlGetPaises,
} from "../src/repository/urls";
import ListaInspiracao from "../src/components/Home/listaInspiracao";

export default function Home() {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  //abxio renomeamos a variavel data por lugares
  const { data: lugares, error: lugaresError } = useSwr(urlGetLugares, fetcher);
  const { data: paises, error: paisesError } = useSwr(urlGetPaises, fetcher);
  const { data: estados, error: estadosError } = useSwr(urlGetEstados, fetcher);
  const { data: cidades, error: cidadesError } = useSwr(urlGetCidades, fetcher);

  if (lugaresError) return <div>Failed to load users</div>;
  if (!lugares) return <div>Loading...</div>;
  // if(!estados) estados

  const myLoaderImage = (src) => {
    return src;
  };

  const goToDetails = (id, tipe) => {
    if (id === null) {
      console.warn("PIHG42 : Opção inválida");
      return;
    }
    switch (tipe) {
      case "lugar":
        window.location = `/lugares/${id}`;
        break;
      default:
        console.warn("PIHG46 : Opção não implementada");
    }
  };

  const itemLugarTemplace = (lugar) => {
    return (
      <div className="product-item">
        <div className="product-item-content text-center">
          <div className="p-mb-3">
            <Image
              loading="lazy"
              // src="/images/loading.gif"
              // loader={() => myLoaderImage(lugar?.imagem_capa)}
              src={lugar?.imagem_capa || "/images/loading.gif"}
              width={"150vw"}
              height={"150vw"}
              alt={lugar.nome}
              unoptimized={true}
              className="border-round product-image cursor-pointer"
              onClick={() => goToDetails(lugar?.id, "lugar")}
            />
          </div>
          <h4 className="p-mb-1 mb-1">
            {(lugar.nome.length <= 30 && lugar.nome) ||
              lugar.nome.slice(0, 27) + "..."}
          </h4>
          <h6 className="p-mt-0 p-mb-3 mb-1">
            Visitado por: {lugar.visitas} pessoas
          </h6>
          <span className="border-round px-2 text-white bg-blue-600">
            {lugar.status}
          </span>
          <div className="car-buttons p-mt-5 py-2">
            <Button
              className="p-button p-button-rounded p-mr-2"
              onClick={() => goToDetails(lugar?.id, "lugar")}
            >
              Detalhes
            </Button>
            <Button
              icon="pi pi-star"
              className="p-button-warning p-button-rounded p-mr-2 text-white"
            />
            <Button
              icon="pi pi-heart"
              className="p-button-danger p-button-rounded p-disabled"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header
        title={`${process.env.APP_NAME} | O lugar perfeito para alimentar o coração de todo viajante!`}
      />
      <Menu />

      <main className="container pt-5">
        <h1 className="mt-5">Bem Vindo S2Traveler</h1>
        <article className="">
          <p className="text-center mb-5">
            O local ideal para quem gosta de viajar e está sempre em busca de
            novos lugares!
            <br />
            Estamos em desenvolvimento
          </p>
          <div className="col-12">
            <div className="col-12 col-offset-0 sm:col-12 md:col-12 lg:col-10 lg:col-offset-1 xl:col-8 xl:col-offset-2">
              <div className="box shadow-5 px-2 py-4 bg-white border-round">
                <Carousel
                  value={lugares.slice(0, 6)}
                  numVisible={window.innerWidth > 800 ? 3 : 2}
                  numScroll={2}
                  responsiveOptions={responsiveOptions}
                  className="custom-carousel px-0"
                  circular
                  autoplayInterval={3000}
                  itemTemplate={itemLugarTemplace}
                  header={
                    <h2 className="text-center mb-3">Lugares em Alta!</h2>
                  }
                />
              </div>
            </div>
          </div>
        </article>
        <article className="mt-5 w-screen">
          <h2 className="text-center mt-5">Inspiração para viagens futuras</h2>
          <p className="text-center mb-5">
            O local ideal para quem gosta de viajar e está sempre em busca de
            novos lugares!
          </p>
          <div className="col-12 px-5">
            <div className="col-12 col-offset-0 sm:col-12 md:col-12 lg:col-10 lg:col-offset-1 xl:col-8 xl:col-offset-2 shadow-5 px-2 py-4 bg-white border-round">
              <div className="tabview-demo">
                <div className="card">
                  {/* <h5>Default</h5> */}
                  <TabView>
                    <TabPanel header="Paises">
                      {(paises && ListaInspiracao(paises)) || (
                        <h1>Nenhum pais encontrado</h1>
                      )}
                    </TabPanel>
                    <TabPanel header="Cidades">
                      {(cidades && ListaInspiracao(cidades)) || (
                        <h1>Nenhum pais encontrado</h1>
                      )}
                    </TabPanel>
                    <TabPanel header="Locais">
                      {(lugares && ListaInspiracao(lugares)) || (
                        <h1>Nenhum pais encontrado</h1>
                      )}
                    </TabPanel>
                  </TabView>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Explore destinos perto de você:
          Maricá 6,5 horas de carro Cidade de São
          Paulo 15 minutos de carro Rio de Janeiro 6 horas de carro Guarujá 2
          horas de carro São Sebastião 4,5 horas de carro Curitiba 6,5 horas de
          carro Balneário Camboriú 9 horas de carro Bertioga 2 horas de carro */}
      </main>
      <Footer />
    </>
  );
}
