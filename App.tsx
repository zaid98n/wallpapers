/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import { Text, View } from 'react-native';


// const App = () => {

//   return (
//     <View>
//       <View>
//         <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10, fontSize: 20, color: 'green' }}>Categories</Text>
//       </View>
//     </View>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/appNavigator';

export default function App() {
  return <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
}