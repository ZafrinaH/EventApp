import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Headline2 = ({text}) => {
    return (
        <Text style={styles.container}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 40,
        color: COLORS.grey900,
        padding: 10
    },
});
export default Headline2;