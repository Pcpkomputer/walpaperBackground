import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image,ImageBackground } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import ImageLoader from '../components/ImageLoader';


export default function PreviewWalpaper() {

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
    style={{flex:1,backgroundColor:"whitesmoke"}}>
        <ImageBackground 
        source={{uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"}}
        style={{flex:1}}>
                <LinearGradient 
                 colors={['black','rgba(0,0,0,0)']}
                style={{position:"absolute",top:0,width:"100%"}}>
                    <View style={{height:StatusBarHeight}}></View>
                    <View style={{height:EStyleSheet.value("60rem"),alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                        <Text numberOfLines={1} style={{marginLeft:EStyleSheet.value("20rem"),color:"white",fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>New Tech - Anthony Early</Text>
                    </View>
                </LinearGradient>
                <LinearGradient 
                 colors={['rgba(0,0,0,0)','black']}
                style={{position:"absolute",bottom:0,width:"100%"}}>
                    <View style={{height:EStyleSheet.value("60rem"),alignItems:"center",justifyContent:"space-between",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
                        <View style={{flexDirection:"row",flex:1}}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                            <Text numberOfLines={1} style={{marginLeft:EStyleSheet.value("20rem"),color:"white",fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>Set Walpaper</Text>
                        </View>
                        <AntDesign style={{marginRight:EStyleSheet.value("10rem")}} name="heart" size={EStyleSheet.value("20rem")} color="white" />
                    </View>
                   
                </LinearGradient>
        </ImageBackground>
    </View>
  );
}

