// Fake users data
import { lugares } from "../../../src/mocks/lugares";

export default function handler(req, res) {
    // Get data from your database
    res.status(200).json(lugares);
}