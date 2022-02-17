import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import firestore from '@react-native-firebase/firestore';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screen/HomeScreen';
import RegisterUser from './src/Screen/RegisterUser';
import UpdateUser from './src/Screen/UpdateUser';
import ViewAllUser from './src/Screen/ViewAllUser';
import ViewUser from './src/Screen/ViewUser';
import DeleteUser from './src/Screen/DeleteUser';
import RealTimeAddUpdateUser from './src/Screen/RealTimeAddUpdateUser';
import AddOrderSummary from './src/Screen/AddOrderSummary';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
//   const usersCollection = firestore().collection('Users');
//   const userDocument = firestore()
//     .collection('Users')
//     .doc('3eF2vSjwH4oOucqcs3mp');
//   const users = firestore()
//     .collection('Users')
//     .doc('3eF2vSjwH4oOucqcs3mp')
//     .get();
//   console.log(users);

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
