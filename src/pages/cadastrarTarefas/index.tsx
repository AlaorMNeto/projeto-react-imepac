import React, {use, useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { style } from "./styles";
import { themas} from "../../global/themes";
import Menu from "../../components/menu/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, 'CadastrarTarefas'>;

export default function CadastrarTarefas({ navigation }: Props){

    const [tarefa,setTarefa] = useState("");
    const [disciplina,setDisciplina] = useState("");
    const [data,setData] = useState("");
    const [prioridade,setPrioridade] = useState("");

   function handleCadastrarTarefas() {
        try {

        if(!tarefa || !disciplina || !data || !prioridade){
            return Alert.alert("Preencha todos os campos");
        }

        const novaTarefa = {
        id: Date.now().toString(),
        nome: tarefa,
        disciplina: disciplina,
        data: data,
        prioridade: prioridade,
        status: "Pendente"
        };

        Alert.alert(
            "Tarefa cadastrada com sucesso!",
            "",
            [
                {
                    text:"OK",
                    onPress: () => navigation.navigate("ListaTarefas",{ novaTarefa })
                }
            ]
        );

        } catch (error) {
        console.log("Erro ao cadastrar tarefa. Tente novamente!", error);
        }
    }
    return(

    <View style={style.container}>

     <Menu />

     <Text style={style.title}>Cadastrar Tarefas</Text>

     {/* Nome da tarefa */}

      <View style={style.inputContainer}>
      <MaterialIcons name="task" size={23} color="gray"/>
      <TextInput
      placeholder="Nome da tarefa"
      style={style.input}
      value={tarefa}
      onChangeText={setTarefa}
      />
      </View>

    {/* Disciplina */}

    <View style={style.inputContainer}>
    <MaterialIcons name="menu-book" size={23} color="gray"/>
    <TextInput
    placeholder="Disciplina"
    style={style.input}
    value={disciplina}
    onChangeText={setDisciplina}
    />
    </View>

   {/* Data */}

   <View style={style.inputContainer}>
   <MaterialIcons name="date-range" size={23} color="gray"/>
   <TextInput
   placeholder="Data de entrega"
   style={style.input}
   value={data}
   onChangeText={setData}
   />
   </View>

  {/* Prioridade */}

  <Text style={style.label}>Prioridade da tarefa</Text>

  <View style={style.priorityContainer}>

  <TouchableOpacity
  style={[style.priorityBtn,
  prioridade === "Alta" && style.prioritySelection
  ]}
  onPress={()=>setPrioridade("Alta")}
  >
  <Text style={style.priorityText1}>Alta</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={[style.priorityBtn,
  prioridade === "Média" && style.prioritySelection
  ]}
  onPress={()=>setPrioridade("Média")}
  >
  <Text style={style.priorityText2}>Média</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={[style.priorityBtn,
  prioridade === "Baixa" && style.prioritySelection
  ]}
  onPress={()=>setPrioridade("Baixa")}
  >
  <Text style={style.priorityText3}>Baixa</Text>
  </TouchableOpacity>

  </View>

  {/* Botão de Cadastro */}

  <TouchableOpacity style={style.button} onPress={handleCadastrarTarefas}>
  <Text style={style.buttonText}>Salvar Tarefa</Text>
  </TouchableOpacity>

  </View>

 )
};