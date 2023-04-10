import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ListView } from "../screens";
import { MonthlyView } from "../screens";

export type RootStackParamList = {
  ListView: undefined;
  MonthlyView: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListView"
        component={ListView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MonthlyView"
        component={MonthlyView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
