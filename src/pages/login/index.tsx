import React, {useState} from "react";

import {
    Text,
    View, 
    Image,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';

import {style} from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import Logo from '../../assets/Gemini_Generated_Image_vac7htvac7htvac7-Photoroom.png';
import { themas } from "../../global/themes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Input } from "../../components/input";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootStackParamList } from "../AppNavigation";

 type Props = DrawerScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function getLogin(){
        try{
            if(!email || !senha){
                return Alert.alert('Preencha com todos os campos!')
            }
            Alert.alert("Logado com sucesso!", "", [
                { text: "OK", onPress: () => navigation.navigate("Home") }
            ]);
        } catch (error) {
            console.log('Erro ao logar!');
        }
    };

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} />
                <Input />
                <Text style={style.colorandfontSize}>Bem Vindo!</Text>
            </View>
            {/* Campo E-Mail */}
            <View style={style.boxMid}>
                        <Text style={style.title}>E-Mail</Text>
                <View style={style.boxInputEmail}>
                            <TextInput 
                            style={style.input}
                            value={email}
                            onChangeText={(e) =>setEmail(e)}
                            placeholder="Digite seu email"
                            />
                            <MaterialIcons name="email" size={23} color={themas.colors.gray} />
                </View>
                {/* Campo Senha*/}
                    <Text style={style.title}>Senha</Text>
                <View style={style.boxInputSenha}>
                    <TextInput 
                    style={style.input}
                    value={senha}
                    onChangeText={(e) =>setSenha(e)}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    />
                    <MaterialIcons name="password" size={23} color={themas.colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    <Text style={style.colorandfontSize}>Entrar</Text>
                </TouchableOpacity>

                {/* Link para Cadastro */}
                {/* Link para a tela de Cadastro */}
                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                    <Text style={style.colorandfontSize}>Não tem conta? Cadastre-se aqui!</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}