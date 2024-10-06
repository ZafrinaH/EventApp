import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { COLORS } from "../constants/styles";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: COLORS.grey400,
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 16,
                position: 'relative',
                bottom: 20,
            },
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                elevation: 0,
                backgroundColor: COLORS.grey900,
                height: 83,
            }
        }}>
            <Tab.Screen  name="Home" component={Home} options={{ headerShown: false, tabBarIcon: () => {
                return(
                    <Icon
                    name={'home-outline'}
                    style={{color: COLORS.grey400, fontSize: 28, }}
                     />
                )
            }}}/>
             <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true, tabBarIcon: () => {
                return(
                    <Icon
                    name={'microsoft'}
                    style={{color: COLORS.grey400, fontSize: 28, }}
                     />
                )
            }}}/>
        </Tab.Navigator>
    );
}