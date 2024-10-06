import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { COLORS } from '../constants/styles';

const Headline5 = ({text}) => {
    return (
        <View>
        <Text style={styles.container}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 32,
        color: COLORS.grey900,
    },
});
export default Headline5;