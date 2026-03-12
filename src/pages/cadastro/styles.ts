import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: themas.colors.corDeFundo,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 30,
        color: themas.colors.white,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
        fontWeight: "bold",
        color: themas.colors.white,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff"
    },
    input: {
        flex: 1,
        height: 40,
        marginRight: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor:themas.colors.primary,
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});