import { StyleSheet } from "react-native";

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"#f7f7f7"
    },
    navLogo: {
      backgroundColor:"#fff",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
    navText: {
      marginTop:40,
      margin:15,
      fontSize:30,
      color:"#0099e6",
      fontWeight:"bold"
    },
    navButton: {
      marginTop:40,
      margin:15,
      flexDirection: 'row',
      backgroundColor:"#000",
      borderRadius:5,
      padding:7,
    },
    buttonText: {
      color:"#fff",
      fontSize:16,
      margin:5,
      fontWeight:"bold",
    },
    discoverText:{
      fontSize:30,
      fontWeight:"bold",
      margin:10,
      color: "#000"
    },
    searchbarContainer: {
      flexDirection:"row",
      alignItems:"center"
    },
    searchBar: {
      margin:10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth:1,
      borderColor:"#a8a8a8",
      borderRadius:5,
      padding:2,
      backgroundColor:"#fff",
      width:"80%",
    },
    searchInput: {
      width:"85%",
      color: "#999"
    },
    filterButton: {
      borderWidth:1,
      borderColor:"#a8a8a8",
      borderRadius:5,
      alignItems:"center",
      justifyContent:"center",
      width:50,
      height:50,
      backgroundColor:"#fff"
    },
    scrollView: {
      margin: 10,
    },
    activeBox: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#000',
      color:"#fff",
      borderRadius: 7,
      marginRight: 10,
      padding:12
    },
    box: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 50,
      backgroundColor: '#fff',
      color:"#000",
      borderRadius: 7,
      marginRight: 10,
      padding:12,
    },
    activeBoxText: {
      color:"#fff"
    },
    boxText: {
      color:"#000"
    },
    itemContainer: {
      backgroundColor: '#fff',
      margin:10,
        // Sombra para iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      // Sombra para Android
      elevation: 3,
      borderRadius: 10
    },
    itemImage: {
      backgroundColor:"#666",
      height:250,
      width:"100%",
    },
    itemInfo: {
      margin:10
    },
    itemTitleContainer: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"space-between",
      marginVertical:5
    },
    itemTitle: {
      fontSize:20,
      fontWeight:"bold",
      color: "#000"
    },
    itemTime: {
      color:"#a1a1a1"
    },
    itemDesc: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"flex-start",
      margin:5
    },
    itemStatus: {
      color:"#a1a1a1"
    },
    itemDescText:{
      color:"#a1a1a1"
    },
    itemUbi: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"flex-start",
      margin:5
    },
    itemUbiText: {
      color:"#a1a1a1"
    },
    itemProfile:{
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"flex-start",
      margin:5,
      gap:10
    },
    itemProfileImg: {
      backgroundColor:"#666",
      height:40,
      width:40,
      borderRadius:50
    },
    profileImg: {
      height:40,
      width:40,
      borderRadius:50
    },
    itemProfileText: {
      color:"#a1a1a1"
    },
    itemButton: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent:"center",
      marginVertical:10,
      gap:20,
      backgroundColor:"#000",
      padding:10,
      borderRadius:10
    },
    itemButtonText: {
      color:"#fff"
    },
    closeFilter: {
      alignItems:"flex-end"
    },
    closeFilterText: {
      fontSize:20,
      fontWeight:"bold",
      color:"#000"
    },
    filterTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:"center",
    color: "#000"
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    marginTop: 7,
    marginBottom: 20,
    textAlign:"center"
  },
  sliderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: "#000"
  },
  kmText: {
    flexDirection:"row",
    gap:4
  },
  gps: {
    backgroundColor: '#e0ffe0',
    color: '#1e7e34',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    overflow: 'hidden',
    fontSize: 12,
    marginLeft: 4,
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
    marginBottom: 20,
    color: "#000"
  },
  pickerContainer: {
    color:"#000",
    flex:1,
    backgroundColor:"#fff"
  },
  picker: {
    borderWidth: .5,
    borderColor: "#a1a1a1",
    borderRadius: 7,
    marginBottom: 15,
    marginTop:10,
    color: "#000",
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    marginRight:10
  },
  text: {
    color: "#000",
  },
  pickerWrapper: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 6,
  marginBottom: 15,
  backgroundColor: '#fff',
},
})