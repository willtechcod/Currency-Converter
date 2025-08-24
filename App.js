import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/routes/stackRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
