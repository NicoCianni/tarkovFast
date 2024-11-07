import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name="Inicio" component={LoginStack}/>
            <Stack.Screen name="Home" component={HomeStack}/>
        </Stack.Navigator>
    )
}

export default MainStack