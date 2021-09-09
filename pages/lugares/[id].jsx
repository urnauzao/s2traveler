import { useRouter } from "next/router";
import Image from "next/image";
import useSwr from "swr";
import Footer from "../../src/components/footer";
import Header from "../../src/components/header";
import Menu from "../../src/components/menu";
import { Galleria } from "primereact/galleria";
import { useRef } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function User() {
  const router = useRouter();
  // const galeria = useRef(null);
  const { data, error } = useSwr(
    router.query.id ? `/api/lugar/${router.query.id}` : null,
    fetcher
  );

  if (error) return <div>Failed to load user</div>;
  if (!data) return <div>Loading...</div>;

  // const responsiveOptions = [
  //   {
  //     breakpoint: "1500px",
  //     numVisible: 5,
  //   },
  //   {
  //     breakpoint: "1024px",
  //     numVisible: 3,
  //   },
  //   {
  //     breakpoint: "768px",
  //     numVisible: 2,
  //   },
  //   {
  //     breakpoint: "560px",
  //     numVisible: 1,
  //   },
  // ];

  // const itemTemplate = (item) => {
  //   return <Image src={item} alt={data?.nome} width={"100%"} height={"100%"} />;
  // };

  // const thumbnailTemplate = (item) => {
  //   return <Image src={item} alt={data?.nome} width={50} height={50} />;
  // };

  return (
    <>
      <Header title={process.env.APP_NAME + " | " + data?.nome} />
      <Menu />
      {/* <Galleria
        ref={galeria}
        value={data?.imagens}
        responsiveOptions={responsiveOptions}
        numVisible={9}
        style={{ maxWidth: "50%" }}
        circular
        fullScreen
        showItemNavigators
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      /> */}
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
                  className="border-round shadow-8"
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
                            className="border-round shadow-8"
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
