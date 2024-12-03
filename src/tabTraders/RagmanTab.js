import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import RagmanTab1 from '../navigationTabs/RagmanTab1';
import RagmanTab2 from '../navigationTabs/RagmanTab2';
import RagmanTab3 from '../navigationTabs/RagmanTab3';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const RagmanTabOne = () => (
    <RagmanTab1 />
);

const RagmanTabTwo = () => (
    <RagmanTab2 />
);

const RagmanTabThree = () => (
    <RagmanTab3 />
);

const RagmanTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={RagmanTabOne} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={RagmanTabTwo} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={RagmanTabThree} options={{ title: 'Tab 3' }} />
        </Tab.Navigator>
    );
};


export default RagmanTab;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})