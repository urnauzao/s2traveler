// Fake users data
import { cidades } from "../../../src/mocks/cidades";

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(cidades);
}
