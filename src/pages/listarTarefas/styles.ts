import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:themas.colors.corDeFundo,
        padding:12,
    },

    title:{
        fontSize:26,
        fontWeight:"bold",
        marginTop:10,
        marginBottom:20,
        textAlign:"center",
        color:themas.colors.white,
    },

    card:{
        backgroundColor:"#FFF",
        padding:15,
        borderRadius:10,
        marginBottom:12,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:3,
    },

    nome:{
        fontSize:16,
        fontWeight:"bold",
    },

    data:{
        color: "#555",
    },

    status:{
    marginTop:3,
    fontWeight:"bold"
    },

    buttons:{
    flexDirection:"row",
    gap:10
    },

    btnConcluir:{
    backgroundColor:"#2ECC71",
    padding:8,
    borderRadius:6
    },

    btnEdit:{
    backgroundColor:"#4A90E2",
    padding:8,
    borderRadius:6
    },

    btnExcluir:{
    backgroundColor:"#E74C3C",
    padding:8,
    borderRadius:6
    },
});