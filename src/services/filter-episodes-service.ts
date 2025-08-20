import { ResponsePodcastModel } from "../models/response-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<ResponsePodcastModel> => {

    // definindo a interface de retorno
    let responseFormat: ResponsePodcastModel = {
        statusCode: 0,
        body: []
    }

    const queryString = podcastName?.split('?p=')[1] ?? '';
    const data = await repoPodcast(queryString);

    responseFormat.statusCode = data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
}