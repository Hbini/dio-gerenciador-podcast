import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    // queryString
    const [baseURL, queryString] = req.url?.split('?') ?? ["", ""];
    
    if (req.method === HttpMethod.GET && baseURL === Routes.LIST) {
        await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseURL === Routes.FILTER) {
        await getFilterEpisodes(req, res);
    }
}