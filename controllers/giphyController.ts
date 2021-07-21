import axios from "axios";
import GifModel from "../models/gifModel";
import { API_KEY, URL_API } from "../utils/constants";

class GiphyController {
  static async searchGif(
    text: string
  ): Promise<{ data: GifModel[]; pagination: PaginationModel }> {
    const response = await axios.get(`${URL_API}/gifs/search`, {
      params: {
        api_key: API_KEY,
        q: text,
        limit: 10,
        offset: 0,
      },
    });

    return response.data;
  }
}

export default GiphyController;
