import { useRouter } from "next/router";
import Image from "next/image";
import useSwr from "swr";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import Menu from "../../src/components/menu";
import { GMap } from "primereact/gmap";
import { useState, useEffect } from "react";
import {
  loadGoogleMaps,
  removeGoogleMaps,
} from "./../../src/services/GoogleMapsService";
import { Divider } from "primereact/divider";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function User() {
  const router = useRouter();
  const [googleMapsReady, setGoogleMapsReady] = useState(false); //googlemaps
  const [overlays, setOverlays] = useState(null); //googlemaps
  useEffect(() => {
    loadGoogleMaps(() => {
      setGoogleMapsReady(true);
    });

    return () => {
      removeGoogleMaps();
    };
  }, []);

  const { data, error } = useSwr(
    router.query.id ? `/api/lugar/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;
  const googleOptions = {
    //googlemaps
    center: {
      lat: data?.geolocation?.position?.lat || -25.691996234383048,
      lng: data?.geolocation?.position?.lng || -54.43506105219341,
    },
    zoom: 14,
  };

  const onMapReady = () => {
    //googlemaps
    setOverlays([
      new google.maps.Marker({
        position: {
          lat: data?.geolocation?.position?.lat || -25.691996234383048,
          lng: data?.geolocation?.position?.lng || -54.43506105219341,
        },
        title: data?.geolocation?.title,
      }),
    ]);
  };

  return (
    <>
      <Header title={process.env.APP_NAME + " | " + data?.nome} />
      <Menu />
      <main className="container">
        <h1 className="my-3">{data?.nome}</h1>
        <div className="col-12">
          <div className="col-12 md:col-12 lg:col-8 lg:col-offset-2">
            <p className="relative">
              Classificação: {data?.classificacao} | Visitas: {data?.visitas} |
              Comentários: 0 | {data?.cidade} - {data?.estado}
              <span className="absolute right-0">Compartilhar | Salvar</span>
            </p>
            <div className="grid mt-2">
              <div className="col-12 md:col-12 lg:col-8">
                <Image
                  loading="lazy"
                  src={data?.imagem_capa || "/images/loading.git"}
                  width={400}
                  height={400}
                  alt={data?.nome}
                  unoptimized={true}
                  className="border-round"
                  layout="responsive"
                  // onClick={() => galeria.show()}
                />
              </div>
              <div className="col-12 md:col-12 lg:col-4">
                <div className="grid">
                  {data?.imagens &&
                    data.imagens.map((value, index) => {
                      if (index > 3) return;
                      return (
                        <div className="col-3 md:col-3 lg:col-6" key={index}>
                          <Image
                            loading="lazy"
                            src={value || "/images/loading.git"}
                            alt={data?.nome || "-"}
                            unoptimized={true}
                            className="border-round"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            // onClick={() => galeria.show()}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="card bg-white border-round p-3">
              <p>{data?.descricao}</p>
            </div>

            <Divider className="my-5 py-5" />
            <h2 className="text-justify">Onde fica:</h2>
            <GMap
              options={googleOptions}
              overlays={overlays}
              style={{ width: "100%", minHeight: "320px" }}
              onMapReady={onMapReady}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
