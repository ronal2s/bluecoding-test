import React from "react";
import { View } from "react-native";

function Spacer({ height, width }: { height?: number; width?: number }) {
  return (
    <View
      style={{
        marginTop: height,
        marginBottom: height,
        marginLeft: width,
        marginRight: width,
      }}
    />
  );
}

export default Spacer;
