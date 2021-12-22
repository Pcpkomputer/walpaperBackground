import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image,ImageBackground, ToastAndroid } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import ImageLoader from '../components/ImageLoader';

import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';



export default function PreviewWalpaper(props) {

  let showInterstitialAds = async ()=>{
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); 
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

  useEffect(()=>{
    showInterstitialAds();
  },[]);

  let [selectedIndex, setSelectedIndex] = useState(0);

  let _callback = res => {
    console.log('Response: ', res);
  };


  let _setWallpaper =  (uri) => {
    ManageWallpaper.setWallpaper(
       {
         uri: uri,
       },
       _callback,
       TYPE.HOME,
     );
   };

  return (
    <View 
    style={{flex:1,backgroundColor:"whitesmoke"}}>
        <ImageBackground 
        source={{uri:props.route.params.image}}
        style={{flex:1}}>
                <LinearGradient 
                 colors={['black','rgba(0,0,0,0)']}
                style={{position:"absolute",top:0,width:"100%"}}>
                    <View style={{height:StatusBarHeight}}></View>
                    <View style={{height:EStyleSheet.value("60rem"),alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
                    <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                props.navigation.goBack();
            }}
            >
                 <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
                        <Text numberOfLines={1} style={{marginLeft:EStyleSheet.value("20rem"),color:"white",fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>{props.route.params.item.title || ""}</Text>
                    </View>
                </LinearGradient>
                <LinearGradient 
                 colors={['rgba(0,0,0,0)','black']}
                style={{position:"absolute",bottom:0,width:"100%"}}>
                    <View style={{height:EStyleSheet.value("60rem"),alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
                        <View style={{flexDirection:"row",flex:1}}>
                            <TouchableOpacity
                            onPress={async ()=>{
                               _setWallpaper(props.route.params.image);
                               ToastAndroid.show("Success changed wallpapers!",500);
                            }}
                            style={{flexDirection:"row"}}>
                                <Ionicons name="arrow-back" size={24} color="white" />
                                <Text numberOfLines={1} style={{marginLeft:EStyleSheet.value("20rem"),color:"white",fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>Set Walpaper</Text>
                       
                            </TouchableOpacity>
                        </View>
                        <AntDesign style={{marginRight:EStyleSheet.value("10rem")}} name="heart" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                   
                </LinearGradient>
        </ImageBackground>
    </View>
  );
}

