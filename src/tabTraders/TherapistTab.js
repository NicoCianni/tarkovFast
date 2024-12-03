import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import TherapistTab1 from '../navigationTabs/TherapistTab1';
import TherapistTab2 from '../navigationTabs/TherapistTab2';
import TherapistTab3 from '../navigationTabs/TherapistTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const TherapistTabOne = () => (
    <TherapistTab1 />
);

const TherapistTabTwo = () => (
    <TherapistTab2 />
);

const TherapistTabThree = () => (
    <TherapistTab3 />
);

const TherapistTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={TherapistTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={TherapistTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={TherapistTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default TherapistTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})