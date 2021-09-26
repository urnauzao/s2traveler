import { paises } from "../../../src/mocks/paises";

export default function userHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      let pais = paises.filter((pais, key) => {
        if (pais?.id == id) {
          return pais;
        }
      });
      if (pais) res.status(200).json(pais[0]);
      else res.status(404).json(null);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, name: pais || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
