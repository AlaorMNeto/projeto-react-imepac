import React from "react";
import { View, Text } from "react-native";
import { style } from "./styles";
import Menu from "../../components/menu/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "DetalhesTarefa">;

export default function DetalhesTarefa({ route }: Props){

    const { tarefa } = route.params;

    return(

    <View style={style.container}>

    <Menu/>

    <Text style={style.title}>Detalhes da Tarefa</Text>

    <View style={style.card}>

    <Text style={style.info}>📌 Tarefa: {tarefa.nome}</Text>

    <Text style={style.info}>📚 Disciplina: {tarefa.disciplina}</Text>

    <Text style={style.info}>📅 Data de entrega: {tarefa.data}</Text>

    <Text style={style.info}>⚠ Prioridade: {tarefa.prioridade}</Text>

    <Text style={style.info}>📊 Status: {tarefa.status}</Text>

    </View>

    </View>

    )
};