import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
    flex:1,
    backgroundColor:themas.colors.corDeFundo,
    padding:13,
    },

    title:{
    fontSize:26,
    fontWeight:"bold",
    textAlign:"center",
    marginTop:12,
    marginBottom:20,
    color:themas.colors.white,
    },

    card:{
    backgroundColor:"#FFF",
    padding:20,
    borderRadius:10,
    elevation:3
    },

    info:{
    fontSize:16,
    marginBottom:10
    }

});