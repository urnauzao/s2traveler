import "primeflex/primeflex.css";
import useSwr from "swr";
import fetcher from "../services/HttpRequestService";
import { urlGetLugares } from "../repository/Lugares";
import Image from "next/image";
import { Rating } from "primereact/rating";

const CardTraveler = () => {
  const { data, error } = useSwr(urlGetLugares, fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;

  const myLoaderImage = (src) => {
    return src;
  };

  return (
    <div className="grid">
      {data.map((lugar) => (
        <div
          key={lugar.id}
          className="col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2"
          onClick={() => {
            window.location = `/lugares/${lugar.id}`;
          }}
        >
          <div className="box bg-gray-100 border-round p-2 shadow-3 cursor-pointer">
            <div className="box text-center">
              <Image
                loading="lazy"
                //   src="/images/loading.git"
                //   loader={() => myLoaderImage(lugar?.imagem_capa)}
                src={lugar?.imagem_capa || "/images/loading.git"}
                width={200}
                height={200}
                alt={lugar.nome}
                unoptimized={true}
                className="border-round shadow-8"
              />
            </div>
            <h3 className="text-teal-900 text-center">{lugar.nome}</h3>
            <Rating
              value={lugar.classificacao}
              cancel={false}
              onChange={(e) =>
                alert("valor: " + e.value + " | Não implementado")
              }
              className="text-center my-1"
            />
            <p>
              {(lugar.descricao.length <= 150 && lugar.descricao) ||
                lugar.descricao.slice(0, 147) + "..."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardTraveler;
