import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Menu from "../../components/menu/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "FrasesMotivacionais">;

export default function FrasesMotivacionais({ navigation }: Props) {
    
    const [frase, setFrase] = useState("");
    const [autor, setAutor] = useState("");
    const [loading, setLoading] = useState(false);

    async function buscarFrase(){

    try{

    setLoading(true);

    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();

    const fraseOriginal = data[0].q;
    const autorOriginal = data[0].a;

    let frasePT = fraseOriginal;

    try{

    const traducao = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fraseOriginal)}&langpair=en|pt`
    );

    const traducaoData = await traducao.json();

    if(traducaoData?.responseData?.translatedText){
    frasePT = traducaoData.responseData.translatedText;
    }

    }catch(error){

    console.log("Erro na tradução, usando frase original");

    }

    setFrase(frasePT);
    setAutor(autorOriginal);

    }catch(error){

    console.log("Erro ao buscar frase", error);

    setFrase("A persistência realiza o impossível.");
    setAutor("Provérbio Chinês");

    }finally{

    setLoading(false);

    }

    }

    useEffect(()=>{
    buscarFrase();
    }, []);

    return (

    <View style={style.container}>

    <Menu/>

    <Text style={style.title}>
    Frases Motivacionais
    </Text>

    <View style={style.card}>

    {loading ? (

    <ActivityIndicator size="large" color="#6C63FF"/>

    ) : frase ? ( 
    
    <>

    <Text style={style.frase}>
    "{frase}"
    </Text>

    <Text style={style.autor}>
    - {autor}
    </Text>

    </>

    ) : (

        <Text style={style.frase}>
            Nenhuma frase encontrada.
        </Text>

    )}

    </View>

    <TouchableOpacity
    style={style.button}
    onPress={buscarFrase}
    >

    <Text style={style.buttonText}>
    Gerar Nova Frase
    </Text>

    </TouchableOpacity>

    </View>

    )
};