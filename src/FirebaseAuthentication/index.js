import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeAuthScreen from './Screens/HomeAuthScreen';
import SplashScreen from './Screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Register", //Set Header Title
            headerStyle: {
              backgroundColor: "#307ecc", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
};

const FirebaseAuth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                {/* SplashScreen which will come once for 2 Seconds */}
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    // Hiding header for Splash Screen
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeAuthScreen}
                    options={{
                        title: "Home", //Set Header Title
                        headerStyle: {
                        backgroundColor: "#307ecc", //Set Header color
                        },
                        headerTintColor: "#fff", //Set Header text color
                        headerTitleStyle: {
                        fontWeight: "bold", //Set Header text style
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default FirebaseAuth