import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#122A4A",
        padding:15,
    },

    title:{
       fontSize:26,
       fontWeight:"bold",
       marginTop:10,
       marginBottom:20,
       color:themas.colors.white,
       textAlign:"center",
    },

    inputContainer:{
      flexDirection:"row",
      alignItems:"center",
      backgroundColor:"#FFF",
      padding:10,
      borderRadius:8,
      marginBottom:15,
      elevation:2,
    },

    input:{
      flex:1,
      marginLeft:10,
    },

    label:{
      fontWeight:"bold",
      color: themas.colors.white,
      marginTop:10,
      marginBottom:10
    },

    priorityContainer:{
      flexDirection:"row",
      justifyContent:"space-between"
    },

    priorityBtn:{
      backgroundColor:"#4A90E2",
      padding:10,
      borderRadius:8,
      width:"30%",
      alignItems:"center"
    },

    priorityText:{
      color:"#FFF",
      fontWeight:"bold"
    },

    button:{
      marginTop:25,
      backgroundColor:"#4A90E2",
      padding:15,
      borderRadius:10,
      alignItems:"center"
    },

    buttonText:{
      color:"#FFF",
      fontSize:16,
      fontWeight:"bold",
    },

    prioritySelection:{
      backgroundColor:themas.colors.black,
    },

});