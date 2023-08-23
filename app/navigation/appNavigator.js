import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../components/Home';
import Feeds from '../components/Feeds';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                tabBarStyle: {
                    backgroundColor: 'powderblue',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                },
            })}
        >
            <Tab.Screen
                // options={{
                //     title: ({ focused }) => (
                //         <FontAwesome name='home' size={24} color="black" />
                //     ),
                // }}
                name="Home"
                component={Home} />
            <Tab.Screen name="Catgories" component={Feeds} />
        </Tab.Navigator>
    );
}

export default AppNavigator;
