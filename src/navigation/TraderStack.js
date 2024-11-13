import { createStackNavigator } from "@react-navigation/stack";
import Prapor from "../screens/TradersFolder/Prapor";
import Traders from "../screens/Traders";

const Stack = createStackNavigator()

const TraderStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Traders" component={Traders} 
            options={{
                title: "Traders",
            }}
            />
            <Stack.Screen name='Prapor' component={Prapor}
            options={{
                title: "Prapor",
            }}
            />
        </Stack.Navigator>
    )
}


export default TraderStack