// Fake users data
import { paises } from "../../../src/mocks/paises";

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(paises);
}
