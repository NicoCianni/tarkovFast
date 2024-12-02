import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import PraporTab1 from '../navigationTabs/PraporTab1';
import PraporTab2 from '../navigationTabs/PraporTab2';
import PraporTab3 from '../navigationTabs/PraporTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const PraporTabOne = () => (
    <PraporTab1 />
);

const PraporTabTwo = () => (
    <PraporTab2 />
);

const PraporTabThree = () => (
    <PraporTab3 />
);

const PraporTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={PraporTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={PraporTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={PraporTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default PraporTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})