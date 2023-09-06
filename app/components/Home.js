import React from 'react';
import Photos from './Photos'
import { createStackNavigator } from '@react-navigation/stack';

// const App = () => {
//     return (
//         <Photos QUERY='desktopwallpapers' />
//     );
// };

const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: '#3e9feb',
                borderRadius: 0,
                elevation: 20,
            },
            headerTintColor: 'white'
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