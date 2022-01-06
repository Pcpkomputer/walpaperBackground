import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions,Image, Share } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons, FontAwesome5,  Feather, AntDesign } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import ImageLoader from '../components/ImageLoader';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';



export default function GetProVersion(props) {

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
    style={{flex:1,backgroundColor:"#1f3047"}}>
        <View style={{height:StatusBarHeight}}></View>
        <View style={{height:EStyleSheet.value("60rem"),alignItems:"center",borderBottomWidth:0.2,borderColor:"white",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                props.navigation.goBack();
            }}
            >
                 <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={{fontSize:EStyleSheet.value("18rem"),fontWeight:"bold",marginLeft:EStyleSheet.value("15rem"),color:"white"}}>Tell Your Friends</Text>
        </View>
        <ScrollView>
            <View style={{paddingVertical:EStyleSheet.value("50rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                <Text style={{fontSize:EStyleSheet.value("18rem"),marginTop:EStyleSheet.value("7rem"),color:"white"}}>TELL YOUR FRIENDS</Text>
                <View style={{backgroundColor:"white",width:EStyleSheet.value("60rem"),height:EStyleSheet.value("3rem"),marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                </View>
                <View>
                    <Text style={{color:"white",lineHeight:EStyleSheet.value("25rem")}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </View>
            <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row"}}>
                <View style={{flex:1}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={async ()=>{
                        const result = await Share.share({
                            message:
                            'Free Wallpapers Background For Your Phone | https://play.google.com/store/apps/dev?id=7951255015540984549',
                        });
                    }} style={{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem")}}>
                        <AntDesign name="instagram" size={EStyleSheet.value("32rem")} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={async ()=>{
                            const result = await Share.share({
                                message:
                                'Free Wallpapers Background For Your Phone | https://play.google.com/store/apps/dev?id=7951255015540984549',
                            });
                    }} style={{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem")}}>
                        <AntDesign name="twitter" size={EStyleSheet.value("32rem")} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={async ()=>{
                            const result = await Share.share({
                                message:
                                'Free Wallpapers Background For Your Phone | https://play.google.com/store/apps/dev?id=7951255015540984549',
                            });
                    }} style={{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem")}}>
                        <AntDesign name="facebook-square" size={EStyleSheet.value("32rem")} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                <TouchableOpacity activeOpacity={0.8} onPress={async ()=>{
                        const result = await Share.share({
                            message:
                            'Free Wallpapers Background For Your Phone | https://play.google.com/store/apps/dev?id=7951255015540984549',
                        });
                }} style={{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("10rem")}}>
                <FontAwesome5 name="facebook-messenger"  size={EStyleSheet.value("32rem")} color="white" />
                </TouchableOpacity>
                </View>
                
               
            </View>
            <View style={{justifyContent:"center",alignItems:"center",marginTop:EStyleSheet.value("25rem"),paddingVertical:EStyleSheet.value("30rem")}}>
            <AdMobBanner
                bannerSize="banner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                />
            </View>
            
        </ScrollView>
    </View>
  );
}

