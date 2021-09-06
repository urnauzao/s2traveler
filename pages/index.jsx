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
  const { data, error } = useSwr(urlGetLugares, fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  const myLoaderImage = (src) => {
    return src;
  };

  const itemLugarTemplace = (lugar) => {
    return (
      <div className="product-item">
        <div className="product-item-content text-center">
          <div className="p-mb-3">
            <Image
              loading="lazy"
              src="/images/loading.git"
              loader={() => myLoaderImage(lugar?.imagem_capa)}
              width={"150vw"}
              height={"150vw"}
              alt={lugar.nome}
              className="border-round shadow-8 product-image"
            />
          </div>
          <h4 className="p-mb-1 mb-1">
            {(lugar.nome.length <= 30 && lugar.nome) ||
              lugar.nome.slice(0, 27) + "..."}
          </h4>
          <h6 className="p-mt-0 p-mb-3 mb-1">{lugar.visitas}</h6>
          <span className="border-round px-2 text-white bg-blue-600">
            {lugar.status}
          </span>
          <div className="car-buttons p-mt-5 py-2">
            <Button
              icon="pi pi-search"
              className="p-button p-button-rounded p-mr-2"
            />
            <Button
              icon="pi pi-star"
              className="p-button-success p-button-rounded p-mr-2"
            />
            <Button
              icon="pi pi-cog"
              className="p-button-help p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Header
        title={`${process.env.APP_NAME} | O lugar perfeito para alimentar o coração de todo viajante!`}
      />
      <Menu />

      <main className="container">
        <h1 className="">Bem Vindo S2Traveler</h1>

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
                value={data.slice(0, 6)}
                numVisible={window.innerWidth > 800 ? 3 : 2}
                numScroll={2}
                responsiveOptions={responsiveOptions}
                className="custom-carousel px-0"
                circular
                autoplayInterval={3000}
                itemTemplate={itemLugarTemplace}
                header={<h2 className="text-center mb-3">Lugares em Alta!</h2>}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
