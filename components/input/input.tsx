import React from "react";
import { useColorScheme } from "react-native";
import { TextInput, View } from "react-native";
import colors from "../../utils/colors";
import ThemedText from "../text";
import inputStyle from "./inputStyle";

function CustomTextInput({
  label,
  value,
  name,
  placeholder,
  onChange,
}: {
  label?: string;
  value?: string;
  placeholder?: string;
  name?: string;
  onChange?: (value: string, name: string) => void;
}) {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme == "dark" ? "white" : "black";
  const color = colorScheme == "dark" ? colors.white : colors.black;
  return (
    <View>
      {label && <ThemedText style={inputStyle.label}>{label}</ThemedText>}
      <TextInput
        placeholder={placeholder}
        value={value}
        style={{ ...inputStyle.input, color }}
        onChangeText={(value: string) => {
          if (onChange) {
            onChange(value, name as string);
          }
        }}
      />
      <View
        style={{
          ...inputStyle.bottomLine,
          backgroundColor,
        }}
      />
    </View>
  );
}

export default CustomTextInput;
