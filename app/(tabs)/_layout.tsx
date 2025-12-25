import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { COLORS } from '@/constants/COLORS';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const show = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
    const hide = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));
    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  const TAB_HEIGHT = 60;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TAB_HEIGHT + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 8,
          backgroundColor: '#fff',
          display: keyboardVisible ? 'none' : 'flex',
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Inicio', 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        ),
        }} />
        <Tabs.Screen name="discover" options={{ title: 'Explorar', 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" size={size} color={color} />
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
    </Tabs> 
  )
}