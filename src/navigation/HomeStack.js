import { createStackNavigator } from '@react-navigation/stack';
import Traders from '../screens/Traders';
import QuestTracker from '../screens/QuestTracker';
import Home from '../screens/Home';

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
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
            <Stack.Screen name='Home' component={Home}
            options={{
                title: "Home",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}/>
        </Stack.Navigator>
    )
}


export default HomeStack