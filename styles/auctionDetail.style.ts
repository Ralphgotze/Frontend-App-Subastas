import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/COLORS";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: COLORS.backgroundColor
    },
    photoContainer : {
      flex: 1,
      backgroundColor: "#fff",
      borderWidth: 1, 
      borderColor: '#ddd',
      borderRadius: 10,
    },
    bidsContainer: {
      marginTop: 20,
      padding: 15,
      backgroundColor: "#fff",
      borderColor: '#ccc',
      borderRadius: 10,
    },
    BidsText: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 10,
      color: COLORS.textColor
    },
    bidsInfoContainer: {
      marginTop: 10,
      padding: 15,
      backgroundColor: "#f3f3f3ff",
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#eeeeeeff',
      borderRadius: 15,
    },
    userImage: {
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    bidTextContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    bidUser: {
      fontSize: 14,
      fontWeight: '600',
    },
    bidDate: {
      fontSize: 12,
      color: '#777',
      marginTop: 2,
    },
    bidAmount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#007bff',
    },
    
    mainImage: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: "#666",
      height: 300,
      width: "100%",
    },
    itemImagesContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 30,
    },

    itemImage: {
      width: 70,
      height: 80,
      borderRadius: 8,
      backgroundColor: '#666',
      resizeMode: 'cover',
      marginHorizontal: 5,
    },
    infoContainer: {
      flex: 1,
      marginTop: 20,
      backgroundColor: "#fff",
      borderWidth: 1, 
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 20
    },
    descriptionText: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 10,
      color: COLORS.textColor
    },
    productDescription: {
      fontSize: 15,
      color: COLORS.infoTextColor
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 10,
      width: '100%',
    },
    infoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginVertical: 10,
    },

    infoItem: {
      width: '48%',
      marginBottom: 10,
    },

    infoLabel: {
      fontSize: 12,
      color: '#888',
    },

    infoValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 2,
    },
    amountContainer: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      padding: 20,
      marginVertical: 20,
    },

    currentBidContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },

    currentBidLabel: {
      fontSize: 14,
      color: '#555',
    },

    currentBidValue: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#007bff',
      marginVertical: 5,
    },

    currentBidCount: {
      fontSize: 14,
      color: '#555',
    },

    yourBidLabel: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
    },

    bidInput: {
      height: 45,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 15,
    },

    bidButton: {
      backgroundColor: '#7daaf5',
      height: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    bidButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
})