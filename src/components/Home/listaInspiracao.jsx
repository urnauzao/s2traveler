const ListaInspiracao = (data) => {
  if (!data)
    return (
      <p className="text-orange-800 p-5 text-center">
        Nenhum resultado encontrado!
      </p>
    );

  return (
    <div className="grid">
      {data.map((item, key) => {
        if (item.status === "ativo") {
          return (
            <div
              key={item.nome + key}
              className="col-6 sm:col-6 md:col-4 lg:col-3 xl:col-2"
            >
              <p className="text-green-600 font-bold">{item.nome}</p>
            </div>
          );
        }
        return (
          <div
            key={item.nome + key}
            className="col-6 sm:col-6 md:col-4 lg:col-3 xl:col-2"
          >
            <p className="text-gray-300">{item.nome}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListaInspiracao;
