import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashbordScreen";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen
})
const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
     <AppNavigator />
  );
}