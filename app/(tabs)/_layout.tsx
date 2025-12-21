import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <>
      <Tabs screenOptions={{headerShown:false, tabBarStyle: {
      height: 100, // ⬆️ Aumenta la altura
      // paddingBottom: 60, // 🧼 Espacio para íconos
      paddingTop: 10,
    },}}>
        <Tabs.Screen name="discover" options={{ title: 'Descubrir', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass-outline" size={size} color={color} />
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