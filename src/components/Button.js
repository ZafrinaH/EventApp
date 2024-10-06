import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/styles';

const Button = ({title, secondary=false, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={StyleSheet.touchableStyle}>
        { secondary ?
          <Icon
            name={'arrow-left'}
            style={styles.leftIcon}
          /> : <></>
        }
      
        <Text style={styles.textStyle}>{title}</Text>
        { !secondary ?
          <Icon
            name={'arrow-right'}
            style={styles.rightIcon}
          /> : <></>
        }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    backgroundColor: secondary ? COLORS.textFieldBackground : COLORS.forgotPwdLink,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
  },
  leftIcon: {color: COLORS.black, fontSize: 20, marginRight: 10},
  textStyle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginRight: 10,
    color: secondary ? COLORS.black : COLORS.white
  },
  rightIcon: {color: COLORS.white, fontSize: 20, marginRight: 10}
});

export default Button;