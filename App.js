import React, {useEffect, useState, useContext, createContext} from 'react';
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

export let GlobalContext = createContext();

export default function App() {


  let [initialFetchLoaded, setInitialFetchLoaded] = useState(false);
  let [showSplashScreen, setShowSplashScreen] = useState(false);

  let [splash, setSplash] = useState("");
  let [appName,setAppName] = useState("");

  let [admob, setAdMob] = useState({
    google_app_id:"",
    google_banner_id:"",
    google_interstitial_id:"",
    google_rewarded_id:""
  })

  let fetchTemplates = async ()=>{
    let request = await fetch(`${endpoint}/wallpapers/app/955456a6-0b64-4956-855e-5b8335c262a5`);
    let json = await request.json();

    let {google_app_id,google_banner_id,google_interstitial_id,google_rewarded_id} = json;
    
    setAdMob({
      google_app_id,
      google_banner_id,
      google_interstitial_id,
      google_rewarded_id
    });

    setAppName(json.app_name);
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
    <GlobalContext.Provider
    value={{appName,setAppName,admob,setAdMob}}
    >
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
  </GlobalContext.Provider>
  );
}
