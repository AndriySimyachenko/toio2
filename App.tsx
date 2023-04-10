import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { MonthlyView } from "./scr/screens";
import { ListView } from "./scr/screens";
import React from "react";
import { Provider } from "react-redux";
import store from "./scr/shared/store/store";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./scr/navigation/Navigation";

const Stack = createStackNavigator<any>();

const RootApp = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
