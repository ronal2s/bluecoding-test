import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import flatButtonStyle from "./flatButtonStyle";

function FlatButton({
  children,
  onPress,
  loading,
}: {
  children: string;
  onPress?: () => void;
  loading?: boolean;
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={flatButtonStyle.button}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={flatButtonStyle.buttonText}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

export default FlatButton;
