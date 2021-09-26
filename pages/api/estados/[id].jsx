import { estados } from "../../../src/mocks/estados";

export default function userHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      let estado = estados.filter((estado, key) => {
        if (estado?.id == id) {
          return estado;
        }
      });
      if (estado) res.status(200).json(estado[0]);
      else res.status(404).json(null);
      break;
    case "PUT":
      // Update or create data in your database
      res.status(200).json({ id, nome: estado || `User ${id}` });
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
