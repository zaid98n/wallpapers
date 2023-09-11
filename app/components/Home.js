import React from 'react';
import Photos from './Photos'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#3e9feb',
                borderRadius: 0,
                height: 42,
                elevation: 20,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                //fontFamily: 'YourRoundedFont', // Replace with your rounded font
                fontSize: 20, // Adjust font size
                fontStyle: 'italic'
            },
            headerTitleContainerStyle: {
                //left: 50, // Adjust title's position horizontally
                //right: 100
            },
        }}>
            <Stack.Screen name="Latest Wallpaper" component={HomeScree} />
        </Stack.Navigator>
    );
}

function HomeScree({ navigation }) {
    return (
        <Photos QUERY='desktopwallpapers' />
    );
}


export default App;