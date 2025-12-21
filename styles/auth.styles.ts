import { StyleSheet } from "react-native";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:"#fff"
    },
    topContainer: {
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        margin:10,
        marginBottom:20
    },
    logo: {
        backgroundColor:"#059669",
        alignItems:"center",
        justifyContent: 'center',
        width:50,
        height:50,
        borderRadius:10
    },
    logoT: {
        color:"#fff",
        fontSize:25,
        fontWeight:"bold"
    },
    logoText: {
        fontSize:35,
        fontWeight:"bold",
        color: "#000"
    },
    topText: {
        color:"#a1a1a1",
        marginBottom:20,
        fontSize:15
    },
    inputContainer: {
        // borderWidth:1,
        backgroundColor: '#fff',
        padding:10,
        margin:10,
         // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        // Sombra para Android
        elevation: 3,
    },
    inputTop: {
        margin:20,
        alignItems:"center"
    },
    inputText1: {
        fontWeight:"bold",
        fontSize:25,
        margin:10,
        color: "#000"
    },
    inputText2: {
        color:"#a8a8a8"
    },
    emailInput: {
        margin:15,
        padding:10,
        borderWidth:1,
        borderColor:"#d5d5d5",
        borderRadius:10,
        color: "#000"
    },
    passwordInput: {
        margin:15,
        padding:10,
        borderWidth:1,
        borderColor:"#d5d5d5",
        borderRadius:10,
        color: "#000"
    },
    button: {
        backgroundColor:"#059669",
        borderRadius:10,
        margin:10
    },
    buttonText: {
        textAlign:"center",
        color:"#fff",
        margin:10,
    },
    register: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        marginBottom:20
    },
    registerButtonText: {
        color:"#059669"
    },
    registerText: {
        color:"#6e6e6e"      
    },
    nameRegisterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
    nameInput: {
        margin:10,
        paddingRight:100,
        borderWidth:1,
        borderColor:"#d5d5d5",
        borderRadius:10,
        color: "#000"
    },
    text: {
        color:"#000"
    }
})