import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { styles } from "../styles";
import Logo from "../assets/logo.jpg";
import Olho from "../assets/olho1.png";

export default function Login() {
  return (
    <View style={styles.container1}>
      <View style={styles.topBar}>
        <Text style={styles.cancel}>Cancelar</Text>
        <Image source={Logo} style={styles.image} />
        <View style={{ width: 50 }} />
      </View>

      <Text style={styles.title}>Digite sua senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
        placeholderTextColor="#666"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#666"
          secureTextEntry={true}
        />
        <Image
          source={Olho} style={{ width: 24, height: 24 }}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}