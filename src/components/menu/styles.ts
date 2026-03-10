import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#4d96ce",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#29e009",
    },
    menuItem: {
        fontSize: 16,
        fontWeight: "bold",
    },
})