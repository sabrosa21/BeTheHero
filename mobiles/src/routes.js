import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Incidents from "./pages/Incidents";
import Detail from "./pages/Detail";

export default function Routes() {
  return (
    <NavigationContainer>
      {/* We set the headerShown to flase to disable the top page title */}
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {/* We need to set a name attribute to the screens */}
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
