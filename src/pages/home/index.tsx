import React, { useState } from "react";

import {
    Text,
    View,
    Image, 
    TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {style} from './styles';
import Menu from "../../components/menu/Menu";

import { RootStackParamList } from "../AppNavigation";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function handleHome() {

    const navigation = useNavigation<NavigationProps>();

    return (
        <View style={style.container}>
            <Menu />
            
            {/* Logo e descrição*/}
            <View style={style.header}>
            <Image 
             source={require("../../assets/Gemini_Generated_Image_vac7htvac7htvac7-Photoroom.png")}
             style={style.logo}
            />

            <Text style={style.title}>StudyTrack</Text>

            <Text style={style.subtitle}>
                Organize seus estudos, acompanhe suas tarefas e mantenha sua motivação todos os dias!
            </Text>
        </View>

        {/*Cards*/}
        <View style={style.cardsContainer}>

            <TouchableOpacity
                style={style.card}
                onPress={() => navigation.navigate("ListaTarefas", {})}
            >
              <Text style={style.cardIcon}>📚</Text>
              <Text style={style.cardTitle}>Minhas Tarefas</Text>
                    <Text style={style.cardText}>
                        Visualize e acompanhe suas tarefas a qualquer momento.
                    </Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={style.card}
                    onPress={() => navigation.navigate("CadastrarTarefas", { tarefa: undefined })}
                >
                    <Text style={style.cardIcon}>➕</Text>
                    <Text style={style.cardTitle}>Nova Tarefa</Text>
                    <Text style={style.cardText}>
                        Cadastre uma nova tarefa ou meta de estudo aqui!
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.card}
                    onPress={() => navigation.navigate("FrasesMotivacionais")}
                >
                    <Text style={style.cardIcon}>💡</Text>
                    <Text style={style.cardTitle}>Frases Motivacionais</Text>
                    <Text style={style.cardText}>
                        Inspire-se com frases motivacionais para estudar e ter motivação todos os dias!
                    </Text>
                </TouchableOpacity>

        </View>

     </View>
    )
};