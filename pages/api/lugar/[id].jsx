import { lugares } from "../../../src/mocks/lugares";

export default function userHandler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            let lugar = lugares.filter((lugar, key) => {
                if (lugar?.id == id) {
                    return lugar;
                }
            });
            if (lugar)
                res.status(200).json(lugar[0]);
            else
                res.status(404).json(null);
        break;
        case "PUT":
            // Update or create data in your database
            res.status(200).json({ id, name: name || `User ${id}` });
        break;
        default:
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}