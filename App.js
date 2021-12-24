import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';


import HomeScreen from './screen/HomeScreen';
import DetailWalpaperPack from './screen/DetailWalpaperPack';
import PreviewWalpaper from './screen/PreviewWalpaper';
import GetProVersion from './screen/GetProVersion';
import ShareScreen from './screen/ShareScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { endpoint } from './utils/extra_utils';

const Stack = createNativeStackNavigator();


const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

export default function App() {

  let [initialFetchLoaded, setInitialFetchLoaded] = useState(false);
  let [showSplashScreen, setShowSplashScreen] = useState(false);

  let [splash, setSplash] = useState("");

  let fetchTemplates = async ()=>{
    let request = await fetch(`${endpoint}/wallpapers/app/95289d3f-138e-468b-9493-683a76029c48`);
    let json = await request.json();
    setSplash(json.image);
    setInitialFetchLoaded(true);
    setShowSplashScreen(true);
 }

 useEffect(()=>{
    fetchTemplates();
 },[])

 if(!initialFetchLoaded){
   return null;
 }

 if(showSplashScreen){
    return (
      <View style={{backgroundColor:"white",flex:1}}>
        <Image onLoad={()=>{
            setTimeout(() => {
                setShowSplashScreen(false);
            }, 1000);
        }} style={{width:"100%",height:"100%"}} source={{uri:splash}}></Image>
      </View>
    )
 }


  return (
    <NavigationContainer>
    <StatusBar translucent backgroundColor="transparent" />
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

