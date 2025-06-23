import React from "react";
import { ScrollView } from "react-native";
import Perfil from "./pages/perfil";
import Login from "./pages/login";

// ScrollView para rolar entre as duas páginas
export default function App() {
  return (
    <ScrollView>
      <Login />
      <Perfil />
    </ScrollView>
  );
};
