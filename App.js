import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
import CreateEventScreen from "./screens/CreateEventScreen";
import EditScreen from "./screens/EditScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add" component={CreateEventScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
