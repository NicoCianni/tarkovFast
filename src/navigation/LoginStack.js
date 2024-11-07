import { createStackNavigator } from '@react-navigation/stack';
import Register from '../screens/User/Register';
import Login from '../screens/User/Login';

const Stack = createStackNavigator()

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}
            options={{
                title: "TarkovFast",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}
            />
            <Stack.Screen name='Register' component={Register}
            options={{
                title: "TarkovFast",
                headerTintColor: "white",
                headerTitleAlign: "center",
                headerStyle: {backgroundColor: "black"},
            }}
            />
        </Stack.Navigator>
    )
}

export default LoginStack