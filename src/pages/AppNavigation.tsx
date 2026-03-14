import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./login/index";
import Cadastro from "./cadastro/index";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './home/index';
import CadastrarTarefas from "./cadastrarTarefas/index";
import ListaTarefas from "./listarTarefas/index"; 
import DetalhesTarefa from "./detalhesTarefas/index";
import FrasesMotivacionais from "./frasesMotivacionais/index";

// Definição correta do tipo das rotas
export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    CadastrarTarefas: { tarefa?: any };
    ListaTarefas: { novaTarefa?: any };
    DetalhesTarefa: { tarefa: any };
    FrasesMotivacionais: undefined;
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
                <Stack.Screen name="CadastrarTarefas" component={CadastrarTarefas} />
                <Stack.Screen name="ListaTarefas" component={ListaTarefas} />
                <Stack.Screen name="DetalhesTarefa" component={DetalhesTarefa}/>
                <Stack.Screen name="FrasesMotivacionais" component={FrasesMotivacionais}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}