import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../constants/styles';
import Caption1 from './Caption1';
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{width: '100%'}}>
      <View style={{borderBottomWidth: 0.5, borderBottomColor: COLORS.textFieldBorder}}>
      <View style={{paddingHorizontal: 16, paddingVertical: 8, marginTop: 8}}>
      <Caption1 style={style.label} text={label}/>
      </View>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        {iconName ? 
        <Icon
          name={iconName}
          style={{color: COLORS.grey700, fontSize: 20, marginRight: 10}}
        /> : <></>}
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: COLORS.grey900, flex: 1}}
          autoCapitalize={false}
          placeholderTextColor={COLORS.grey900}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.grey700, fontSize: 20}}
          />
        )}
      </View>
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.blue,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.textFieldBackground,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;