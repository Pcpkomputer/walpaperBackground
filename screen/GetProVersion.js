import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions,Image, Touchable } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons, Ionicons,  Feather } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import ImageLoader from '../components/ImageLoader';


export default function GetProVersion(props) {

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View
    style={{flex:1,backgroundColor:"#0f519c"}}>
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
            <Text style={{fontSize:EStyleSheet.value("18rem"),fontWeight:"bold",marginLeft:EStyleSheet.value("15rem"),color:"white"}}>Get Pro Version</Text>
        </View>
        <ScrollView>
            <View style={{paddingVertical:EStyleSheet.value("50rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
                <Text style={{fontSize:EStyleSheet.value("18rem"),color:"white"}}>THANKS FOR</Text>
                <Text style={{fontSize:EStyleSheet.value("18rem"),marginTop:EStyleSheet.value("7rem"),color:"white"}}>YOUR SUPPORT</Text>
                <View style={{backgroundColor:"white",width:EStyleSheet.value("60rem"),height:EStyleSheet.value("3rem"),marginTop:EStyleSheet.value("20rem"),marginBottom:EStyleSheet.value("20rem")}}>
                </View>
                <View>
                    <Text style={{color:"white",lineHeight:EStyleSheet.value("25rem")}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Ut enim ad minim veniam, nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
            </View>
            <View style={{paddingHorizontal:EStyleSheet.value("20rem")}}>
                <View style={{borderWidth:1,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),borderColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("15rem"),paddingHorizontal:EStyleSheet.value("15rem")}}>
                    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",height:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("5rem"),width:EStyleSheet.value("20rem")}}>
                        <Feather name="check" size={EStyleSheet.value("15rem")} color="#0f519c" />
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                        <Text style={{color:"white"}}>Unlock All Walpaper Pack</Text>
                    </View>
                </View>
                <View style={{borderWidth:1,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),borderColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("15rem"),paddingHorizontal:EStyleSheet.value("15rem")}}>
                    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",height:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("5rem"),width:EStyleSheet.value("20rem")}}>
                        <Feather name="check" size={EStyleSheet.value("15rem")} color="#0f519c" />
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                        <Text style={{color:"white"}}>Unlock All Walpaper Pack</Text>
                    </View>
                </View>
                <View style={{borderWidth:1,flexDirection:"row",marginBottom:EStyleSheet.value("15rem"),borderColor:"white",borderRadius:EStyleSheet.value("5rem"),paddingVertical:EStyleSheet.value("15rem"),paddingHorizontal:EStyleSheet.value("15rem")}}>
                    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",height:EStyleSheet.value("20rem"),borderRadius:EStyleSheet.value("5rem"),width:EStyleSheet.value("20rem")}}>
                        <Feather name="check" size={EStyleSheet.value("15rem")} color="#0f519c" />
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:EStyleSheet.value("10rem")}}>
                        <Text style={{color:"white"}}>Unlock All Walpaper Pack</Text>
                    </View>
                </View>
            </View>
            <View style={{justifyContent:"center",alignItems:"center",paddingVertical:EStyleSheet.value("30rem")}}>
                <View style={{backgroundColor:"#f45d5c",borderRadius:EStyleSheet.value("10rem"),paddingHorizontal:EStyleSheet.value("25rem"),paddingVertical:EStyleSheet.value("10rem")}}>
                    <Text style={{color:"white",fontSize:EStyleSheet.value("10rem"),textAlign:"center"}}>Start Today</Text>
                    <Text style={{color:"white",fontWeight:"bold",fontSize:EStyleSheet.value("14rem")}}>Unlock Pro</Text>
                </View>
                <TouchableOpacity 
                activeOpacity={0.8}
                onPress={()=>{
                    props.navigation.goBack();
                }}
                style={{marginTop:EStyleSheet.value("20rem")}}>
                    <Text style={{color:"white",fontSize:EStyleSheet.value("10rem")}}>Maybe Later</Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    </View>
  );
}

