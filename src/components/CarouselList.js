import React from 'react';
import {View, FlatList} from 'react-native';
import { screenWidth } from '../constants/styles';
import CarouselListItem from './CarouselListItem';

const CarouselList = ({data}) => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={screenWidth}
                snapToAlignment='center'
                decelerationRate={'fast'}
                initialNumToRender={10}
                renderItem={({item}) => {
                    return(
                        <CarouselListItem item={item}/>
                    )
                }}
            />
        </View>
    );
}
export default CarouselList;