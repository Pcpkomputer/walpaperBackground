import React, {useState,useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Dimensions,Image, Linking,ImageBackground, TouchableOpacity, ToastAndroid } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'; 

import RBSheet from "react-native-raw-bottom-sheet";

import Carousel from 'react-native-snap-carousel';
import { FlatList } from 'react-native-gesture-handler';

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

  const refRBSheet = useRef();

  let showRewardedAds = async()=>{
    await AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917');
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
}

  let showInterstitialAds = async ()=>{
    await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); 
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();
  }

  // useEffect(()=>{
  //   showInterstitialAds();
  // },[]);

  let [selectedIndex, setSelectedIndex] = useState(0);

  let _callback = res => {
    console.log('Response: ', res);
  };


  let _setWallpaper =  (uri,type) => {
      if(type==="home"){
        ManageWallpaper.setWallpaper(
          {
            uri: uri,
          },
          _callback,
          TYPE.HOME,
        );
      }
      else if(type==="lock"){
        ManageWallpaper.setWallpaper(
          {
            uri: uri,
          },
          _callback,
          TYPE.LOCK,
        );
      }
      else if(type==="both"){
        ManageWallpaper.setWallpaper(
          {
            uri: uri,
          },
          _callback,
          TYPE.BOTH,
        );
      }
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
                              //  _setWallpaper(props.route.params.image);
                              //  ToastAndroid.show("Success changed wallpapers!",500);
                              
                              refRBSheet.current.open();
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


        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={EStyleSheet.value("320rem")}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container:{
            // borderTopLeftRadius:EStyleSheet.value("30rem"),
            // borderTopRightRadius:EStyleSheet.value("30rem")
          },
          draggableIcon: {
            marginVertical:EStyleSheet.value("20rem"),
            backgroundColor: "#000"
          }
        }}
      >
        <View style={{flex:1}}>
            <View style={{paddingVertical:EStyleSheet.value("10rem"),justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:EStyleSheet.value("18rem")}}>Choose where to set the wallpaper</Text>
            </View>
            <View style={{marginTop:EStyleSheet.value("7rem")}}>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={async ()=>{
              _setWallpaper(props.route.params.image,"home");
              ToastAndroid.show("Success changed wallpapers!",500);
              showRewardedAds();
            }}
            style={{justifyContent:"center",marginTop:EStyleSheet.value("10rem"),alignItems:"center"}}>
                <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("14rem"),width:EStyleSheet.value("300rem")}}>
                  <Text style={{fontSize:EStyleSheet.value("20rem")}}>Home Screen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>{
              _setWallpaper(props.route.params.image,"lock");
              ToastAndroid.show("Success changed wallpapers!",500);
              showRewardedAds();
            }}
            style={{justifyContent:"center",marginTop:EStyleSheet.value("10rem"),alignItems:"center"}}>
                <View style={{borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("14rem"),width:EStyleSheet.value("300rem")}}>
                  <Text style={{fontSize:EStyleSheet.value("20rem")}}>Lock Screen</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>{
              _setWallpaper(props.route.params.image,"both");
              ToastAndroid.show("Success changed wallpapers!",500);
              showRewardedAds();
            }}
            style={{justifyContent:"center",marginTop:EStyleSheet.value("10rem"),alignItems:"center"}}>
                <View style={{borderWidth:1,backgroundColor:"whitesmoke",borderColor:"whitesmoke",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("15rem"),paddingVertical:EStyleSheet.value("14rem"),width:EStyleSheet.value("300rem")}}>
                  <Text style={{fontSize:EStyleSheet.value("20rem")}}>Both</Text>
                </View>
            </TouchableOpacity>
            </View>
            {/* <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:EStyleSheet.value("18rem"),marginBottom:EStyleSheet.value("10rem")}}>Experience trouble setting wallpaper?</Text>
                <TouchableOpacity
                onPress={()=>{
                  Linking.openURL(props.route.params.image);
                }}
                >
                  <Text style={{fontSize:EStyleSheet.value("18rem"),fontWeight:"bold",textDecorationLine:"underline"}}>Tap here to save to gallery</Text>
                </TouchableOpacity>
            </View> */}
        </View>
      </RBSheet>


    </View>
  );
}
