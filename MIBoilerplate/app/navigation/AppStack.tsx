import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, DetailsScreen} from 'app-screens';
import {RouteNames} from './Routes';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={RouteNames.DetailsScreen} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
