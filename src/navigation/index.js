import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import RestorePassword from '../screens/RestorePassword';
import Welcome from '../screens/OnBoarding/welcome';
import PersonalInfo from '../screens/OnBoarding/personalInfo';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export default function Routes () {
  const {user} = useSelector(state => state.user);

  if(user) {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{headerShown: false}} name="Home" component={BottomTabs}/>
          <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome}/>
          <Stack.Screen options={{headerShown: false}} name="PersonalInfo" component={PersonalInfo}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
  }else {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen options={{headerShown: false}} name="LogIn" component={LogIn}/>
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp}/>
          <Stack.Screen options={{headerShown: false}} name="RestorePassword" component={RestorePassword}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
  }
}