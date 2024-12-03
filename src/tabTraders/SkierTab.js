import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import SkierTab1 from '../navigationTabs/SkierTab1';
import SkierTab2 from '../navigationTabs/SkierTab2';
import SkierTab3 from '../navigationTabs/SkierTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const SkierTabOne = () => (
    <SkierTab1 />
);

const SkierTabTwo = () => (
    <SkierTab2 />
);

const SkierTabThree = () => (
    <SkierTab3 />
);

const SkierTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={SkierTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={SkierTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={SkierTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default SkierTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})