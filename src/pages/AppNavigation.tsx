import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./login/index";
import Cadastro from "./cadastro/index";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './home/index';

// Definição correta do tipo das rotas
export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
}

// Aplica-se o tipo no Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}