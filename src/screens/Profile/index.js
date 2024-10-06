
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import { COLORS, screenWidth } from "../../constants/styles";
import Body2 from "../../components/Body2";
import Button from "../../components/Button";
import Subtitle2 from "../../components/Subtitle2";
import Input from "../../components/Input";
import { db } from "../../config/config";
import { useSelector } from "react-redux";

const Profile = ({navigation}) => {
    const {user} = useSelector(state => state.user);

    const handleBack = async () => {
        navigation.goBack();
    }

    const handleNext = async () => {
        const userCollection = doc(db, 'user', user);
        const userDocRef = await getDoc(userCollection);
        
        if(userDocRef.exists()) {
            if(userDocRef.data().isFirstTime){
                await updateDoc(userCollection, {
                    isFirstTime: false
                });
            }
        }
        navigation.navigate("Home");
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.contentView}>
                    <View>
                        <Subtitle2 text={"Personal info"} />
                        <Body2 text={"You can add your personal data now or do it later"}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            label={"First Name"}
                            placeholder="Enter your first name"
                        />
                        
                        <Input
                            label={"Last Name"}
                            placeholder="Enter your last name"
                            
                        />
                    
                        <Input
                            label={"Email"}
                            placeholder="Enter your email address"
                        />
                    
                        <Input
                            label={"Phone number"}
                            placeholder="Enter your phone number"
                        />
                    
                        <Input
                            label={"Mailing address"}
                            placeholder="Enter your mailing address"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.backButton}>
                            <Button title="Back" onPress={handleBack} secondary={true}/>
                        </View>
                        <View style={styles.nextButton}>
                            <Button title="Next" onPress={handleNext}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        minHeight: '100%'
    },
    mainContainer: {
        backgroundColor: COLORS.white, 
        flex: 1
    },
    contentView: {
        flex: 1, 
        marginHorizontal: 16, 
        marginTop: 30
    },
    inputContainer: {
        marginVertical: 10
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 10, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignContent: 'center'
    },
    backButton: {
        width: (screenWidth/2) - 24
    },
    nextButton: {
        marginLeft: 12, 
        width: (screenWidth/2) - 24
    }
});

export default Profile;