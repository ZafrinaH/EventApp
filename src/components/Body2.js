import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Body2 = ({text, centered}) => {
    return (
        <Text style={styles.container(centered)}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    container: (centered) => ( {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.grey500,
        textAlign: centered ? 'center' : 'left'
    }),
});
export default Body2;