// Fake users data
import { estados } from "../../../src/mocks/estados";

export default function handler(req, res) {
  // Get data from your database
  res.status(200).json(estados);
}
