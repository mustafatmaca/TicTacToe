import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'TicTacToe',
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);