import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComputerGameScreen from "./src/screens/ComputerGameScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PlayerGameScreen from "./src/screens/PlayerGameScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Player: PlayerGameScreen,
    Computer: ComputerGameScreen
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