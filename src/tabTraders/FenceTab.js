import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import FenceTab1 from '../navigationTabs/FenceTab1';
import FenceTab2 from '../navigationTabs/FenceTab2';
import FenceTab3 from '../navigationTabs/FenceTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const FenceTabOne = () => (
    <FenceTab1 />
);

const FenceTabTwo = () => (
    <FenceTab2 />
);

const FenceTabThree = () => (
    <FenceTab3 />
);

const FenceTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={FenceTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={FenceTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={FenceTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default FenceTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})