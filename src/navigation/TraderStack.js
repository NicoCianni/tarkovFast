import { createStackNavigator } from "@react-navigation/stack";
import Prapor from "../screens/TradersFolder/Prapor";
import Therapist from "../screens/TradersFolder/Therapist";
import Fence from "../screens/TradersFolder/Fence";
import Skier from "../screens/TradersFolder/Skier";
import Peacekeeper from "../screens/TradersFolder/Peacekeeper";
import Ragman from "../screens/TradersFolder/Ragman";
import Jaeguer from "../screens/TradersFolder/Jaeguer";
import Ref from "../screens/TradersFolder/Ref";
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
            <Stack.Screen name='Therapist' component={Therapist}
            options={{
                title: "Therapist",
            }}
            />
            <Stack.Screen name='Fence' component={Fence}
            options={{
                title: "Fence",
            }}
            />
            <Stack.Screen name='Skier' component={Skier}
            options={{
                title: "Skier",
            }}
            />
            <Stack.Screen name='Peacekeeper' component={Peacekeeper}
            options={{
                title: "Peacekeeper",
            }}
            />
            <Stack.Screen name='Ragman' component={Ragman}
            options={{
                title: "Ragman",
            }}
            />
            <Stack.Screen name='Jaeguer' component={Jaeguer}
            options={{
                title: "Jaeguer",
            }}
            />
            <Stack.Screen name='Ref' component={Ref}
            options={{
                title: "Ref",
            }}
            />
        </Stack.Navigator>
    )
}


export default TraderStack