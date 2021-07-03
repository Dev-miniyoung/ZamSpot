import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '@containers/Home';
import ListScreen from '@containers/List';
import color from '@stylesheets';

const Tab = createBottomTabNavigator();

function NavigationTab() {
  console.log('color :>> ', color);
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialization="Home"
        tabBarOptions={{
          showLabel: false,
          activeTintColor: color.primaryColor,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            showLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            showLabel: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="format-list-text" color={color} size={40} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTab;
