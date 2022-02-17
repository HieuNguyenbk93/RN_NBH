import { Text, View } from 'react-native'
import React, { Component } from 'react'

import HomeScreen from './Screens/HomeScreen';
import RegisterUser from './Screens/RegisterUser';
import UpdateUser from './Screens/UpdateUser';
import ViewAllUser from './Screens/ViewAllUser';
import ViewUser from './Screens/ViewUser';
import DeleteUser from './Screens/DeleteUser';
import RealTimeAddUpdateUser from './Screens/RealTimeAddUpdateUser';
import AddOrderSummary from './Screens/AddOrderSummary';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const CloundFirestore = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{title: 'Home'}}
                />
                <Stack.Screen
                    name="RegisterUser"
                    component={RegisterUser}
                    options={{title: 'Register'}}
                />
                <Stack.Screen
                    name="UpdateUser"
                    component={UpdateUser}
                    options={{title: 'Update'}}
                />
                <Stack.Screen
                    name="ViewAllUser"
                    component={ViewAllUser}
                    options={{title: 'View All'}}
                />
                <Stack.Screen
                    name="ViewUser"
                    component={ViewUser}
                    options={{title: 'View'}}
                />
                <Stack.Screen
                    name="DeleteUser"
                    component={DeleteUser}
                    options={{title: 'Delete'}}
                />
                <Stack.Screen
                    name="RealTimeAddUpdateUser"
                    component={RealTimeAddUpdateUser}
                    options={{title: 'Real Time Updates'}}
                />
                <Stack.Screen
                    name="AddOrderSummary"
                    component={AddOrderSummary}
                    options={{title: 'Add Order Summary'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default CloundFirestore;