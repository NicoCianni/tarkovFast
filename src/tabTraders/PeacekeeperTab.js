import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import PeacekeeperTab1 from '../navigationTabs/PeacekeeperTab1';
import PeacekeeperTab2 from '../navigationTabs/PeacekeeperTab2';
import PeacekeeperTab3 from '../navigationTabs/PeacekeeperTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const PeacekeeperTabOne = () => (
    <PeacekeeperTab1 />
);

const PeacekeeperTabTwo = () => (
    <PeacekeeperTab2 />
);

const PeacekeeperTabThree = () => (
    <PeacekeeperTab3 />
);

const PeacekeeperTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={PeacekeeperTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={PeacekeeperTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={PeacekeeperTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default PeacekeeperTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})