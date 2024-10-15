import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Login from './src/screens/User/Login';
import Register from './src/screens/User/Register';
import QuestTracker from './src/screens/QuestTracker';
import Home from './src/screens/Home';



export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{
          title: "TarkovFast",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: "black"},
        }}/>
        <Stack.Screen name="Home" component={Home} 
        options={{
        title: "Home",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "black"},
        }}/>
        <Stack.Screen name="Quest Tracker" component={QuestTracker} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ejemplo //