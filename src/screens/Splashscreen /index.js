import { SafeAreaView, Text, ActivityIndicator } from "react-native";
import { styles } from "./styles";

export default function Splashscreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Splashscreen</Text>
      <ActivityIndicator size="large" color="#FFF" />
    </SafeAreaView>
  );
}
