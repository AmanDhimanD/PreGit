import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import Home from "./Screen/Home";
import About from "./Screen/About";
import pageOne from "./Screen/pageOne";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initalRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="React One" component={pageOne} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
