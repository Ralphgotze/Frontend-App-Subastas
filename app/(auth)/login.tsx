import API_URL from '@/server_ip';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createStyles } from '../../styles/auth.styles';
import {io, Socket } from "socket.io-client";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = createStyles();
  const router = useRouter();
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const checkUserId = async () => {
      const id = await AsyncStorage.getItem('usuario_id');
      console.log('USUARIO CONECTADO CON ID: ', id)
      if (id) {
        router.replace('/discover');
      }
    };
    checkUserId();
  }, []);

  const login = () => {
    fetch(`${API_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
    })
    .then(response => {
      if (!response.ok) throw new Error('Credenciales incorrectas');
        return response.json();
    })
    .then(async data => {
      socketRef.current = io(`${API_URL}`, {
        transports: ["websocket"],
        auth: { userId: data.id },
      });

      socketRef.current.on("connect", () => {
        console.log("CONNECTED");
      });

      await AsyncStorage.setItem('usuario_id', String(data.id));
      router.replace('/discover');
    })
    .catch(error => {
      console.error('Error en login:', error);
    });
  }
  const register = () => {
    // router.push("/register");
    console.log('register')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Text style={styles.logoT}>T</Text>
        </View>
        <Text style={styles.logoText}>Trokke</Text>
      </View>
      <Text style={styles.topText}>Tu plataforma de intercambio</Text>
      </View>
      <View style={styles.inputContainer}>
          <View style={styles.inputTop}>
              <Text style={styles.inputText1}>¡Bienvenido de vuelta!</Text>
              <Text style={styles.inputText2}>Ingresa tus datos para acceder a tu cuenta</Text>
          </View>
          <Text style={styles.text}>Email</Text>
          <TextInput
              placeholder="Ejemplo@gmail.com"
              style={styles.emailInput}
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
          />
          <Text style={styles.text}>Contraseña</Text>
          <TextInput
              placeholder="Ingresa tu contraseña"
              secureTextEntry
              style={styles.passwordInput}
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
          />
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
        </TouchableOpacity>
        
        <View style={styles.register}>
          <Text style={styles.registerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={register}>
              <Text style={styles.registerButtonText}>Registrate Aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}