import { cidades } from "../../../src/mocks/cidades";

export default function userHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      let cidade = cidades.filter((cidade, key) => {
        if (cidade?.id == id) {
          return cidade;
        }
      });
      if (cidade) res.status(200).json(cidade[0]);
      else res.status(404).json(null);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, nome: cidade || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
