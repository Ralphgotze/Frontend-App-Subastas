import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <>
      <Tabs screenOptions={{headerShown:false, tabBarStyle: {
      height: 110,
      // paddingBottom: 60, // 🧼 Espacio para íconos
      paddingTop: 10,
    },}}>
        <Tabs.Screen name="home" options={{ title: 'Inicio', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
         }} />
         <Tabs.Screen name="discover" options={{ title: 'Explorar', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={color} />
          ),
         }} />
         <Tabs.Screen name="myAuctions" options={{ title: 'Mis Pujas', 
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gavel" size={size} color={color} />
          ),
         }} />
         <Tabs.Screen name="profile" options={{ title: 'Perfil', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
         }} />
        {/* <Tabs.Screen
          name="create"
          options={{
            title: '',
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: 'black',
                  borderRadius: 35,
                  height: 60,
                  width: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -10, // opcional: eleva el botón
                }}
              >
                <FontAwesome name="plus" size={20} color="white" />
              </View>
            ),
          }}
        /> */}
        {/* <Tabs.Screen name="profile" options={{ title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
         }} /> */}
    </Tabs>
    </>   
  )
}