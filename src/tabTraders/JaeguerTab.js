import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

// Pantallas de ejemplo para las pestañas
const Tab1 = () => (
    <View style={styles.screen}>
        <Text>Tab 1 Content</Text>
    </View>
);

const Tab2 = () => (
    <View style={styles.screen}>
        <Text>Tab 2 Content</Text>
    </View>
);

const Tab3 = () => (
    <View style={styles.screen}>
        <Text>Tab 3 Content</Text>
    </View>
);

const JaeguerTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Tab1" component={Tab1} options={{ title: 'Tab 1' }} />
            <Tab.Screen name="Tab2" component={Tab2} options={{ title: 'Tab 2' }} />
            <Tab.Screen name="Tab3" component={Tab3} options={{ title: 'Tab 3' }} />
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