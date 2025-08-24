import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splashscreen from '../screens/Splashscreen ';


const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
    </Stack.Navigator>
  );
}