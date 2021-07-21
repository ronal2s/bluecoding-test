import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import defaultValues from "../../utils/defaultValues";

export default StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: defaultValues.borderRadius + 3,
  },
  buttonText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
});
