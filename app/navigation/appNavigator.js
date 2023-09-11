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
                    //backgroundColor: '#3e9feb',
                    elevation: 20,
                    backgroundColor: 'rgba(62, 158, 235, 1)',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                    height: 3,
                },
                tabBarLabelStyle: {
                    color: '#f9f7ee',
                    fontFamily: 'normal',
                    fontWeight: 'bold',
                    fontSize: 16,
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Catgories" component={Feeds} />
        </Tab.Navigator>
    );
}

export default AppNavigator;
