import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import HomeScreen from '@containers/Home';
import ListScreen from '@containers/List';
import SearchScreen from '@containers/Search';
import PlaceScreen from '@containers/Place';

const Stack = createStackNavigator();

function NavigationTab() {
  const { i18n } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen
          name="Seacrh"
          component={SearchScreen}
          options={{
            headerTitle: () => <Text>{i18n.t('searchTitle')}</Text>,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Place" component={PlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTab;
