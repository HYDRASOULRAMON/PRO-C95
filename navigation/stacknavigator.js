import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./Tabnavigator";
import Feed from "../screens/Feed";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
