import React, { useContext, useState } from "react";
import { View } from "react-native";
import { GlobalContext } from "../../contexts/globalContext";
import GiphyController from "../../controllers/giphyController";
import GifModel from "../../models/gifModel";
import defaultValues from "../../utils/defaultValues";
import GifListContent from "./content/gifListContent";
import GiftSearchContent from "./content/gifSearchContent";

function HomeScreen() {
  const globalContext = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<GifModel[]>([]);
  const [pagination, setPagination] = useState<PaginationModel>();

  const fetchSearch = async (value: string) => {
    setLoading(true);
    try {
      const response = await GiphyController.searchGif(value);
      setData(response.data);
      setPagination(response.pagination);
    } catch (error) {
      alert("An error has ocurred. " + error);
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: defaultValues.padding }}>
      <GiftSearchContent onSearch={fetchSearch} loading={loading} />
      <GifListContent data={data} />
    </View>
  );
}

export default HomeScreen;
