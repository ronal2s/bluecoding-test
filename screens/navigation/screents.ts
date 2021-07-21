import { StackNavigationOptions } from "@react-navigation/stack";
import Screens from "../../utils/screens_enums";
import HomeScreen from "../home/homeScreen";

type ViewsProps = {
  name: string;
  component: any;
  options?: StackNavigationOptions;
};

const screens: ViewsProps[] = [
  {
    name: Screens.HOME,
    component: HomeScreen,
    options: {
      title: "Home",
    },
  },
];

export default screens;
