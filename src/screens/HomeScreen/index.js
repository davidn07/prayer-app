import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Dimensions, Image, Button} from 'react-native';
import WelcomeScreen from '../WelcomeScreen';
import DetailScreen from '../DetailScreen';

const Index = () => {
  const Stack = createStackNavigator();

  function LogoTitle() {
    var screenWidth = Dimensions.get('window').width;
    return (
      <Image
        style={{width: screenWidth, height: 30}}
        source={require('../../../Images/Logo.png')}
        resizeMode="contain"
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerStyle: {
              height: 120,
            },
            headerTintColor: '#FF5A5F',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
