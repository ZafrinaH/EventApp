import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS } from "../../constants/styles";
import Headline2 from "../../components/Headline2";
import Body2 from "../../components/Body2";
import Button from "../../components/Button";

const Welcome = ({navigation}) => {
    const handleNext = async () => {
        navigation.navigate("PersonalInfo");
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <Headline2 text={"Welcome"}/>
                        <Body2 text={"You are logged in for the first time and can upload a profile photo"}/>
                    </View>
                    <View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                width: 116,
                                height: 116,
                                backgroundColor: COLORS.textFieldBackground,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignSelf: 'center',
                                borderRadius: 116,
                                marginTop: 30
                            }}>
                            <Icon name={'camera-outline'} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Next" onPress={handleNext}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1},
    contentContainer: {minHeight: '100%'},
    mainContainer: {backgroundColor: COLORS.white, flex: 1},
    headingContainer: {alignItems: "center", marginTop: 180, marginHorizontal: 20},
    icon: {color: COLORS.forgotPwdLink, fontSize: 20},
    buttonContainer: {position: 'absolute', bottom: 10, width: '100%', padding: 20}
});

export default Welcome;