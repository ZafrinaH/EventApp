import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Caption1 = ({text}) => {
    return (
        <Text style={styles.container}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 16,
        color: COLORS.grey700,
    },
});
export default Caption1;