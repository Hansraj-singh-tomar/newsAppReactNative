import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import Main from './screens/Main';
import NewsDetails from './screens/NewsDetails';
// import CategoryNews from './screens/CategoryNews';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="CategoryNews"
          component={CategoryNews}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
