import React from "react";
import { Image, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ThemedText from "../../../components/text";
import GifModel from "../../../models/gifModel";

function GifListContent({ data }: { data: GifModel[] }) {
  return (
    <View>
      <ThemedText>Gif List</ThemedText>
      <FlatList
        numColumns={4}
        keyExtractor={(item: GifModel, index: number) => index.toString()}
        data={data}
        renderItem={({ item, index }) => {
          const object: GifModel = { ...item };
          return (
            <Image
              source={{ uri: object.images.downsized.url }}
              style={{ width: 100, height: 100 }}
              key={object.id}
            />
          );
        }}
      />
    </View>
  );
}

export default GifListContent;
