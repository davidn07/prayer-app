import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import AllRequest from '../AllRequest';
import AddPrayer from '.././../components/AddPrayer';

const Index = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllRequest"
        component={AllRequest}
        options={{
          tabBarLabel: () => (
            <Text style={{fontSize: 16, color: '#FF5A5F'}}>All Requests</Text>
          ),
        }}
      />
      <Tab.Screen
        name="AddRequest"
        component={AddPrayer}
        options={{
          tabBarLabel: () => (
            <Text style={{fontSize: 16, color: '#FF5A5F'}}>Add Request</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Index;
