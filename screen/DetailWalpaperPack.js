import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import ImageLoader from '../components/ImageLoader';


export default function DetailWalpaperPack() {

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
    style={{flex:1,backgroundColor:"white"}}>
        <View style={{height:StatusBarHeight}}></View>
        <View style={{height:EStyleSheet.value("60rem"),justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
            <Ionicons name="arrow-back" size={24} color="black" />
            <Text style={{fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>SPACE</Text>
            <Ionicons name="share-social" size={24} color="black" />
        </View>
        <View style={{backgroundColor:"whitesmoke",overflow:"hidden",justifyContent:"center",height:EStyleSheet.value("100rem"),borderRadius:EStyleSheet.value("10rem")}}>
            <ImageLoader resizeMode="cover"  style={{width:"100%",height:"100%",position:"absolute"}} source={{uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"}}></ImageLoader>
            <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                <Text style={{position:"absolute",color:"white",fontSize:EStyleSheet.value("28rem")}}>60 Walpaper</Text>
            </View>
        </View>
        {/* <View style={{backgroundColor:"red",marginHorizontal:EStyleSheet.value("20rem")}}><Text>123</Text></View> */}
        <View style={{flex:1}}>
            <FlatList
            data={[1,2,3,4,5]}
            contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem"),paddingTop:EStyleSheet.value("20rem")}}
            numColumns={2}
            renderItem={()=>{
                return (
                    <View style={{backgroundColor:"whitesmoke",overflow:"hidden",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("10rem"),overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),height:EStyleSheet.value("280rem"),width:EStyleSheet.value("162.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                        <ImageLoader style={{height:EStyleSheet.value("280rem"),width:EStyleSheet.value("162.5rem")}} source={{uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"}}></ImageLoader>
                    </View>
                )
            }}
            />
        </View>
    </View>
  );
}

