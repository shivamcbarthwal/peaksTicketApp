/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home';
import Tickets from './components/Tickets/Tickets';
import Contact from './components/Contact/Contact';
import TicketPurchase from './components/Tickets/TicketPurchase';
import News from './components/News/News';

const Stack = createStackNavigator();

function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'Ubuntu-Regular'}
          }}
        >
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
          >
            {(props) => <Home {...props} username='Sports Fan' />}
          </Stack.Screen>
          <Stack.Screen
            name="Tickets"
            component={Tickets}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'}
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Contact Us'
            }}
          />
          <Stack.Screen
            name="Purchase"
            component={TicketPurchase}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Purchase Tickets'
            }}
          />
          <Stack.Screen
            name="News"
            component={News}
            options={{
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Ubuntu-Regular'},
              headerTitle: 'Latest News'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
