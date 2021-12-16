import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, Pressable, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function ImageLoader(props){

    let [imageLoaded, setImageLoaded] = useState(false);

    if(props.source.uri.match(/file:\/\//)){
        return (
            <View style={{flex:1}}>
            <Image 
            {...props} style={{...props.style}}></Image>
        </View>
        )
    }

    return (
        <View style={{flex:1}}>
            {
                (!imageLoaded) &&
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <ActivityIndicator color="black"/>
                </View>
            }
            <Image 
            onLoadEnd={()=>{
                setImageLoaded(true);
            }}
            {...props} style={{...props.style,display:(imageLoaded) ? null:"none"}}></Image>
        </View>
    )
}