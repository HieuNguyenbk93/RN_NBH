import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import RegisterUser from '../Screen/RegisterUser';
import UpdateUser from '../Screen/UpdateUser';
import ViewAllUser from '../Screen/ViewAllUser';
import ViewUser from '../Screen/ViewUser';
import DeleteUser from '../Screen/DeleteUser';
import RealTimeAddUpdateUser from '../Screen/RealTimeAddUpdateUser';
import AddOrderSummary from '../Screen/AddOrderSummary';

const Stack = createNativeStackNavigator();

const FireStorage = () => {
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

export default FireStorage;