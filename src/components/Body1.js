import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Body1 = ({text}) => {
    return (
        <Text style={styles.container}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        color: COLORS.forgotPwdLink,
    },
});
export default Body1;