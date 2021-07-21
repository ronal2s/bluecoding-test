import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { useColorScheme } from "react-native";
import colors from "../../utils/colors";
import Screens from "../../utils/screens_enums";
import screens from "./screents";

const Stack = createStackNavigator();

function NavigationContent() {
  const colorScheme = useColorScheme();
  const extendedHeaderTheme = {
    headerShown: true,
    headerStyle: {
      backgroundColor: colorScheme == "dark" ? "black" : "white",
    },

    headerTintColor: colorScheme == "dark" ? colors.white : colors.black,
  };

  const navigationTheme =
    colorScheme == "dark"
      ? DarkTheme
      : {
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: "white" },
        };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={extendedHeaderTheme}
        initialRouteName={Screens.HOME}
      >
        {screens.map((view, key) => {
          return (
            <Stack.Screen
              name={view.name}
              component={view.component}
              options={view.options}
              key={key}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationContent;
