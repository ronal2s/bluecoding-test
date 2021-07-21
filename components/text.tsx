import React from "react";
import { StyleProp, Text, TextStyle, useColorScheme } from "react-native";
import colors from "../utils/colors";

function ThemedText({
  children,
  style,
}: {
  children: string;
  style?: StyleProp<TextStyle>;
}) {
  const colorScheme = useColorScheme();
  const color = colorScheme == "dark" ? colors.white : colors.black;
  //@ts-ignore
  return <Text style={{ color, ...style }}>{children}</Text>;
}

export default ThemedText;
