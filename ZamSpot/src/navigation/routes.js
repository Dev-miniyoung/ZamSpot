import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@containers/Home';
import ListScreen from '@containers/List';
import SearchScreen from '@containers/Search';

const Stack = createStackNavigator();

function NavigationTab() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Seacrh" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTab;
