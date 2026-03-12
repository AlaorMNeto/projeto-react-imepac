import { Button, Dimensions, StyleSheet} from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"#122A4A",
    },

    header:{
        alignItems:"center",
        marginTop:20,
        padding:20
    },

    logo:{
     width:120,
     height:120,
     resizeMode:"contain",
     marginBottom:10,
    },

    title:{
     fontSize:28,
     fontWeight:"bold",
     color:themas.colors.white,
    },

    subtitle:{
     textAlign:"center",
     marginTop:5,
     color:themas.colors.white,
     paddingHorizontal:30,
    },

    cardsContainer:{
        padding:20,
    },

    card:{
        backgroundColor:themas.colors.primary,
        padding:20,
        borderRadius:10,
        marginBottom:15,
        elevation:3,
    },

    cardIcon:{
        fontSize:30,
        marginBottom:5,
    },

    cardTitle:{
        fontSize:18,
        fontWeight:"bold",
        color: themas.colors.white,
    },

    cardText:{
        color:themas.colors.white,    
        marginTop: 5,
    },
});