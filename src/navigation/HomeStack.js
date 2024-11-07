import { createStackNavigator } from '@react-navigation/stack';
import Traders from '../screens/Traders';
import QuestTracker from '../screens/QuestTracker';
import Home from '../screens/Home';
import Bullets from '../screens/Bullets';
import WikiOficial from '../screens/WikiOficial';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Tarkov Fast'>
            <Stack.Screen name='Traders' component={Traders}
            options={{
                title: "Traders",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
            <Stack.Screen name='Quest Tracker' component={QuestTracker}
            options={{
                title: "Quest Tracker",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
            <Stack.Screen name='Tarkov Fast' component={Home}
            options={{
                title: "Inicio",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
            <Stack.Screen name='Bullets' component={Bullets}
            options={{
                title: "Quest Tracker",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
            <Stack.Screen name='Wiki Oficial' component={WikiOficial}
            options={{
                title: "Quest Tracker",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
        </Stack.Navigator>
    )
}


export default HomeStack