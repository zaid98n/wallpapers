import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../components/Home';
import Feeds from '../components/Feeds';


const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    backgroundColor: '#494949',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                },
                tabBarLabelStyle: {
                    color: 'white', // Set the text color to black
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Catgories" component={Feeds} />
        </Tab.Navigator>
    );
}

export default AppNavigator;
