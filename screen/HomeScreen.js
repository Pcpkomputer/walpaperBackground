import React, {useState,useEffect, useContext} from 'react';
import { StyleSheet, Text, View, Dimensions,Image, Touchable } from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import {StatusBarHeight} from '../utils/heightUtils'

import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 

import Carousel from 'react-native-snap-carousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';

import { get_templates_by_name} from '../utils/_template_utils';

import {endpoint} from '../utils/extra_utils';

import {GlobalContext} from '../App';

_renderItem = ({item, index},props) => {
  return (
      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=>{
         props.navigation.navigate("DetailWalpaperPack",{item:item});
      }}
      style={{width:EStyleSheet.value("280rem"),height:"100%",overflow:"hidden",justifyContent:"center",alignItems:"center",borderRadius:EStyleSheet.value("10rem"),marginLeft:(index==0) ? EStyleSheet.value("20rem"):null,marginRight:EStyleSheet.value("20rem"),backgroundColor:"#c7c7c7",marginBottom:EStyleSheet.value("30rem")}}>
        <Image source={{uri:item.cover}} style={{position:"absolute",width:"100%",height:"100%"}}></Image>
        <Text style={{color:"white",fontSize:EStyleSheet.value("20rem"),paddingHorizontal:EStyleSheet.value("30rem"),textAlign:"center"}}>{item.name}</Text>
        <View style={{marginTop:EStyleSheet.value("15rem"),borderWidth:1.5,borderColor:"white",borderRadius:EStyleSheet.value("99rem"),paddingVertical:EStyleSheet.value("6rem"),paddingHorizontal:EStyleSheet.value("20rem")}}>
          <Text style={{color:"white"}}>{item.items.length} Walpaper</Text>
        </View>
      </TouchableOpacity>
  );
}



export default function HomeScreen(props) {

  let globalContext = useContext(GlobalContext);

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

  let [data, setData] = useState({
    categories:[]
  });

  let fetchTemplates = async ()=>{
     let request = await fetch(`${endpoint}/wallpapers/app/957660ab-99e5-4164-ad78-593489c05e2d`);
     let json = await request.json();
     setData(json);
     console.log(json);
  }

  useEffect(()=>{
    fetchTemplates();
  },[])

  return (
    <LinearGradient 
    colors={['#f0f0f0','#a7a7a7','#a7a7a7']}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 0.2 }}
    style={{flex:1,backgroundColor:"whitesmoke"}}>
        <View style={{height:StatusBarHeight}}></View>
        <View style={{height:EStyleSheet.value("60rem"),justifyContent:"space-between",alignItems:"center",flexDirection:"row",paddingHorizontal:EStyleSheet.value("20rem"),paddingRight:EStyleSheet.value("15rem")}}>
            <Text style={{fontWeight:"bold",fontSize:EStyleSheet.value("17rem"),color:"white"}}>{globalContext.appName.toUpperCase()}</Text>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                {/* <TouchableOpacity 
                activeOpacity={0.8}
                onPress={()=>{
                  props.navigation.navigate("GetProVersion");
                }}
                style={{paddingHorizontal:EStyleSheet.value("8rem")}}>
                    <MaterialCommunityIcons name="crown" size={EStyleSheet.value("23rem")} color="white" />
                </TouchableOpacity> */}
                <TouchableOpacity 
                activeOpacity={0.8}
                onPress={()=>{
                  props.navigation.navigate("ShareScreen");
                }}
                style={{paddingHorizontal:EStyleSheet.value("8rem")}}>
                  <Entypo name="share" size={EStyleSheet.value("20rem")} color="white" />
                </TouchableOpacity>
               
            </View>
        </View>
        <View style={{paddingHorizontal:EStyleSheet.value("20rem"),flexDirection:"row",alignItems:"center",paddingVertical:EStyleSheet.value("15rem"),paddingBottom:EStyleSheet.value("30rem")}}>
          <Text style={{fontSize:EStyleSheet.value("40rem"),fontWeight:"bold",color:"white"}}>{data.categories[selectedIndex]?.name || ""}</Text>
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
            renderItem={(payload)=>_renderItem(payload,props)}
            pagingEnabled={true}
            onMomentumScrollEnd={({nativeEvent})=>{
                // the current offset, {x: number, y: number} 
                const position = nativeEvent.contentOffset; 
                // page index 
                const index = Math.round(nativeEvent.contentOffset.x / EStyleSheet.value("300rem"));
                setSelectedIndex(index);

            }}
            data={data.categories}
            showsHorizontalScrollIndicator={false}
            // bounces={false}
            decelerationRate={0}
            snapToInterval={EStyleSheet.value("300rem")}
            />
        </View>
    </LinearGradient>
  );
}

