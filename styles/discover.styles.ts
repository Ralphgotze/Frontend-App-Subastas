import { COLORS } from "@/constants/COLORS";
import { StyleSheet } from "react-native";

export const discoverStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.backgroundColor
    },
    categoryContainer: {
      backgroundColor: '#fff',
      borderRadius: 12,
      width: '48%',
      marginBottom: 15,
      padding: 10,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
    },
    categoryText: {
      fontSize: 20,
      color: COLORS.textColor,
      fontWeight: "bold"
    },
    categoryInput: {
      height: 45,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginVertical: 15,
    },
    categoryButton: {
      backgroundColor: COLORS.darkBlueColor,
      padding: 10,
      borderRadius: 10,
      marginBottom: 25
    },
    categoryButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15
    }
  })