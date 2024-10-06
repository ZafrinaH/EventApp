import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/styles';
import Body1 from './Body1';
const ForgotPassword = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        marginTop: 20, 
      }}>
      <Body1 text={title}/>
        <Icon
          name={'arrow-top-right'}
          style={{color: COLORS.forgotPwdLink, fontSize: 20, marginRight: 10, marginLeft: 10}}
        />
    </TouchableOpacity>
  );
};

export default ForgotPassword;