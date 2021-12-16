import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';


_renderItem = ({item, index}) => {
  return (
      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=>{
        alert("123");
      }}
      style={{width:EStyleSheet.value("280rem"),height:"100%",overflow:"hidden",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("10rem"),marginLeft:(index==0) ? EStyleSheet.value("20rem"):null,marginRight:EStyleSheet.value("20rem"),backgroundColor:"#c7c7c7",marginBottom:EStyleSheet.value("30rem")}}>
        <Image source={{uri:item.data[0].uri}} style={{position:"absolute",width:"100%",height:"100%"}}></Image>
        <Text style={{color:"white",fontSize:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("30rem"),textAlign:"center"}}>{item.name}</Text>
        <View style={{marginTop:EStyleSheet.value("15rem"),borderWidth:1.5,borderColor:"white",borderRadius:EStyleSheet.value("99rem"),paddingVertical:EStyleSheet.value("6rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
          <Text style={{color:"white"}}>{item.data.length} Walpaper</Text>
        </View>
      </TouchableOpacity>
  );
}



export default function HomeScreen() {

  let [selectedIndex, setSelectedIndex] = useState(0);

  let [imagePack, setImagePack] = useState([
    {
      name:"Digital Painterly Madness",
      category:"Space",
      data:[
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        },
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        }
      ]
    },
    {
      name:"Digital Painterly Madness",
      category:"Tech",
      data:[
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        },
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        }
      ]
    },
    {
      name:"Digital Painterly Madness",
      category:"Skyline",
      data:[
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        },
        {
          uri:"https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-preview.jpg"
        }
      ]
    }
  ])

  return (
    <LinearGradient 
    colors={['#09579e','#1c2f64','#90171f']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0.2 }}
    style={{flex:1,backgroundColor:"whitesmoke"}}>
        <View style={{height:StatusBarHeight}}></View>
        <View style={{height:EStyleSheet.value("60rem"),justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
            <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("17rem"),color:"white"}}>ABSTRACT</Text>
            <View style={{flexDirection:"row"}}>
                <View style={{paddingHorizontal:EStyleSheet.value("8rem")}}>
                    <MaterialCommunityIcons name="crown" size={EStyleSheet.value("23rem")} color="white" />
                </View>
                <View style={{paddingHorizontal:EStyleSheet.value("8rem")}}>
                  <Entypo name="share" size={EStyleSheet.value("20rem")} color="white" />
                </View>
               
            </View>
        </View>
        <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",alignItems:"center",paddingVertical:EStyleSheet.value("15rem"),paddingBottom:EStyleSheet.value("30rem")}}>
          <Text style={{fontSize:EStyleSheet.value("40rem"),fontWeight:"bold",color:"white"}}>{imagePack[selectedIndex].category.toUpperCase()}</Text>
        </View>
        <View style={{flex:1,marginBottom:EStyleSheet.value("35rem")}}>
            {/* <Carousel
              layout='default'
              data={[1,2,3,4,5]}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get("screen").width}
              itemWidth={Dimensions.get("screen").width-EStyleSheet.value("50rem")}
            /> */}
            <FlatList
            horizontal={true}
            renderItem={_renderItem}
            pagingEnabled={true}
            onMomentumScrollEnd={({nativeEvent})=>{
                // the current offset, {x: number, y: number} 
                const position = nativeEvent.contentOffset; 
                // page index 
                const index = Math.round(nativeEvent.contentOffset.x / EStyleSheet.value("300rem"));
                setSelectedIndex(index);

            }}
            data={imagePack}
            showsHorizontalScrollIndicator={false}
            // bounces={false}
            decelerationRate={0}
            snapToInterval={EStyleSheet.value("300rem")}
            />
        </View>
    </LinearGradient>
  );
}

