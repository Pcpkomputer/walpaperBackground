import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';


import HomeScreen from './screen/HomeScreen';
import DetailWalpaperPack from './screen/DetailWalpaperPack';
import PreviewWalpaper from './screen/PreviewWalpaper';
import GetProVersion from './screen/GetProVersion';
import ShareScreen from './screen/ShareScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Home" component={HomeScreen} />
        <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="DetailWalpaperPack" component={DetailWalpaperPack} />
        <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PreviewWalpaper" component={PreviewWalpaper} />
        <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="GetProVersion" component={GetProVersion} />
           <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ShareScreen" component={ShareScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

