import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
    flex:1,
    backgroundColor:themas.colors.corDeFundo,
    padding:14,
    },

    title:{
    fontSize:26,
    fontWeight:"bold",
    textAlign: "center",
    marginTop:20,
    marginBottom:30,
    color:themas.colors.white,
    },

    card:{
    backgroundColor:"#FFF",
    padding:25,
    borderRadius:12,
    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:5,
    elevation:4,
    marginBottom:30,
    },

    frase:{
    fontSize:18,
    textAlign:"center",
    marginBottom:15,
    color:"#444"
    },

    autor:{
    fontSize:16,
    textAlign:"right",
    fontStyle:"italic",
    color:"#666"
    },

    button:{
    backgroundColor:themas.colors.primary,
    padding:15,
    borderRadius:10
    },

    buttonText:{
    color:"#FFF",
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    },

});