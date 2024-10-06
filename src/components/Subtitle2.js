import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Subtitle2 = ({text, centered}) => {
    return (
        <Text style={styles.container(centered)}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    container: (centered) => ({
        fontWeight: '600',
        fontSize: 19,
        lineHeight: 24,
        color: COLORS.grey900,
        textAlign: centered ? 'center' : 'left'
    }),
});
export default Subtitle2;