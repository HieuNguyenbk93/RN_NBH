import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import UploadFileScreen from './Screens/UploadFileScreen';
import FilesListingScreen from './Screens/FilesListingScreen';
import UploadScreen from './Screens/UploadScreen';

const Stack = createNativeStackNavigator();

const CloundStorage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="UploadFileScreen"
          component={UploadScreen}
          options={{title: 'Upload File'}}
        />
        <Stack.Screen
          name="FilesListingScreen"
          component={FilesListingScreen}
          options={{title: 'Uploaded Files'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CloundStorage;
