import * as http from "http";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { getPodcastHandler } from "./controllers/podcasts-controller";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const baseURL = req.url?.split("?")[0] ?? "";
  const queryString = req.url?.split("?")[1] ?? "";

  // Lista de episodios
  if (req.method === HttpMethod.GET && baseURL === Routes.LIST) {
    await getPodcastHandler(req, res, queryString);
  }
  // Filtrar episodios
  else if (req.method === HttpMethod.GET && baseURL === Routes.FILTER) {
    await getPodcastHandler(req, res, queryString);
  }
  // Rota nao encontrada
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Rota nao encontrada" }));
  }
};
