import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import JaeguerTab1 from '../navigationTabs/JaeguerTab1';
import JaeguerTab2 from '../navigationTabs/JaeguerTab2';
import JaeguerTab3 from '../navigationTabs/JaeguerTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const JaeguerTabOne = () => (
    <JaeguerTab1 />
);

const JaeguerTabTwo = () => (
    <JaeguerTab2 />
);

const JaeguerTabThree = () => (
    <JaeguerTab3 />
);

const JaeguerTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={JaeguerTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={JaeguerTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={JaeguerTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default JaeguerTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})