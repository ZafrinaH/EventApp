import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import { COLORS, screenWidth } from '../constants/styles';

const CarouselListItem = ({item}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: item.url}} style={styles.imageStyle}/>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{item.id}/10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {width: screenWidth, flex: 1, alignItems: 'stretch', justifyContent: 'center'},
    imageStyle: {width: '100%', height: 220, resizeMode: 'cover', flexGrow:1, 
        alignItems: 'center', justifyContent:'center'},
    textContainer: {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', 
        bottom: 0, right: 0, padding: 5, backgroundColor: 'white', margin: 15},
    textStyle: {color: COLORS.black}
});
export default CarouselListItem;