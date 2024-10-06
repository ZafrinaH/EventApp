import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Headline4 = ({text}) => {
    return (
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.container}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: '600',
        fontSize: 26,
        lineHeight: 36,
        color: COLORS.grey900,
    },
});
export default Headline4;