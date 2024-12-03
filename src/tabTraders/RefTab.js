import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import RefTab1 from '../navigationTabs/RefTab1';
import RefTab2 from '../navigationTabs/RefTab2';
import RefTab3 from '../navigationTabs/RefTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const RefTabOne = () => (
    <RefTab1 />
);

const RefTabTwo = () => (
    <RefTab2 />
);

const RefTabThree = () => (
    <RefTab3 />
);

const RefTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={RefTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={RefTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={RefTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default RefTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})