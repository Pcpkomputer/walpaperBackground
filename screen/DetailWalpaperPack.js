import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 

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


export default function DetailWalpaperPack(props) {

    let showInterstitialAds = async ()=>{
        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); 
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false});
        await AdMobInterstitial.showAdAsync();
      }
    
    //   useEffect(()=>{
    //     showInterstitialAds();
    //   },[]);

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
    style={{flex:1,backgroundColor:"white"}}>

        <View style={{position:"absolute",bottom:0,zIndex:999,width:"100%",backgroundColor:"whitesmoke",borderWidth:1,borderColor:"#e8e8e8",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
           <View>
                <AdMobBanner
                    bannerSize="banner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                        />
           </View>
        </View>

        <View style={{height:StatusBarHeight}}></View>
        <View style={{height:EStyleSheet.value("60rem"),justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                props.navigation.goBack();
            }}
            >
                 <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{fontSize:EStyleSheet.value("18rem"),fontWeight:"bold"}}>{props.route.params.item.name.toUpperCase()}</Text>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                props.navigation.navigate("ShareScreen")
            }}
            >
                 <Ionicons name="share-social" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"whitesmoke",overflow:"hidden",justifyContent:"center",height:EStyleSheet.value("100rem")}}>
            <ImageLoader resizeMode="cover"  style={{width:"100%",height:"100%",position:"absolute"}} source={{uri:props.route.params.item.cover}}></ImageLoader>
            <View style={{position:"absolute",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>
                <Text style={{position:"absolute",color:"white",fontSize:EStyleSheet.value("28rem")}}>{props.route.params.item.items.length} Walpaper</Text>
            </View>
        </View>
        {/* <View style={{backgroundColor:"red",marginHorizontal:EStyleSheet.value("20rem")}}><Text>123</Text></View> */}
        <View style={{flex:1}}>
            <FlatList
            data={props.route.params.item.items}
            contentContainerStyle={{paddingHorizontal:EStyleSheet.value("20rem"),paddingBottom:EStyleSheet.value("55rem"),paddingTop:EStyleSheet.value("20rem")}}
            numColumns={2}
            renderItem={({item,index})=>{
                return (
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={async ()=>{
                        await showInterstitialAds();
                        await props.navigation.navigate("PreviewWalpaper",{image:item.image, item:item});
                    }}
                    style={{backgroundColor:"whitesmoke",overflow:"hidden",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("10rem"),overflow:"hidden",marginBottom:EStyleSheet.value("15rem"),height:EStyleSheet.value("280rem"),width:EStyleSheet.value("162.5rem"),marginRight:EStyleSheet.value("15rem")}}>
                        <ImageLoader style={{height:EStyleSheet.value("280rem"),width:EStyleSheet.value("162.5rem")}} source={{uri:item.image}}></ImageLoader>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    </View>
  );
}

