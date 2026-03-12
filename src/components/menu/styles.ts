import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#122A4A",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#4A90E2",
    },
    menuItem: {
        fontSize: 16,
        fontWeight: "bold",
        color:themas.colors.white,
    },
})