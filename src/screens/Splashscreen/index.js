import { SafeAreaView, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Splashscreen() {
  const navigator = useNavigation();

  function handleStart() {
    navigator.navigate("Home");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Convert Money</Text>
      <Text style={styles.subtitle}>
        Que tal converter sua moeda favorita em tempo real conforme a cotação do
        dia.
      </Text>
      <Image
        source={require("../../assets/images/slug.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={() => handleStart()}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
