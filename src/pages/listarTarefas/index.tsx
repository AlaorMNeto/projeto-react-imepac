import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Menu from "../../components/menu/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "ListaTarefas">;

export default function ListaTarefas({ navigation, route }: Props) {

    const [tarefas,setTarefas] = useState([
        {
         id:"1",
         nome:"Estudar React",
         disciplina:"Programação",
         data:"20/06/2026",
         prioridade:"Alta",
         status:"Pendente"
        },

        {
        id:"2",
        nome:"Trabalho de Redes",
        disciplina:"Redes",
        data:"25/06/2026",
        prioridade:"Média",
        status:"Pendente"
        }
        ]);

        useEffect(() => {

        if(route.params?.novaTarefa){

        setTarefas(prev => [...prev, route.params!.novaTarefa!]);

        }

        }, [route.params?.novaTarefa]);

        function concluirTarefa(id:string){
        Alert.alert(
        "Concluir tarefa",
        "Deseja marcar esta tarefa como concluída?",
        [
        {
        text:"Cancelar",
        style:"cancel"
        },
        {
        text:"Sim",
        onPress:()=>{
        setTarefas(prev =>
        prev.map(t =>
        t.id === id ? {...t,status:"Concluída"} : t
        )
        );
        }
        }
        ]
        )

        }

       function deletarTarefa(id:string){

        Alert.alert(
        "Excluir tarefa",
        "Tem certeza que deseja excluir esta tarefa?",
        [
        {
        text:"Cancelar",
        style:"cancel"
        },
        {
        text:"Excluir",
        onPress:()=>{
        setTarefas(prev => prev.filter(t => t.id !== id));

        Alert.alert("Tarefa excluída com sucesso!");
        }
        }
        ]
        )

}

        function editarTarefa(item:any){

        Alert.alert(
        "Editar tarefa",
        "Você será redirecionado para editar a tarefa."
        );

        navigation.navigate("CadastrarTarefas", { tarefa: item });
        }

        return (

            <View style={style.container}>

            <Menu/>

            <Text style={style.title}>Lista de Tarefas</Text>

            <FlatList
            data={tarefas}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
           
            <TouchableOpacity
            style={style.card}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("DetalhesTarefa",{tarefa:item})}
            >

            <View>
            <Text style={style.nome}>{item.nome}</Text>

            <Text style={style.data}>
            📅{item.data}
            </Text>

            <Text style={style.status}>
            Status: {item.status}
            </Text>

            </View>

            <View style={style.buttons}>

            <TouchableOpacity
            onPress={()=>concluirTarefa(item.id)}
            style={style.btnConcluir}
            >
                <MaterialIcons name="check" size={22} color="#FFF"/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>editarTarefa(item)}
            style={style.btnEdit}
            >
            <MaterialIcons name="edit" size={22} color="#FFF"/>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>deletarTarefa(item.id)}
            style={style.btnExcluir}
            >
            <MaterialIcons name="delete" size={22} color="#FFF"/>
            </TouchableOpacity>

            </View>

            </TouchableOpacity>
        )}
        />

        </View>

        )
};