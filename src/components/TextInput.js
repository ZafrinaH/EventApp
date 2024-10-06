import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import { COLORS } from '../constants/styles';

const CustomTextInput = ({icon, ...otherProps}) => {
    const validationColor = '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8
      }}
    >
      <View style={{ padding: 8 }}>
      {/* <AntDesign name={icon} size={20} color={COLOURS.grey700} /> */}
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
    </View>
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
export default CustomTextInput;