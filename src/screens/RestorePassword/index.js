import React, { useState } from 'react'
import { Text, SafeAreaView, View, StyleSheet, Button } from 'react-native'

import { forgotPassword } from '../../services/auth';
import { COLORS } from '../../constants/styles';
import Input from '../../components/Input';

const RestorePassword = ({navigation}) => {
    const [inputs, setInputs] = useState({email: ''});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      };

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        }

        if (isValid) {
            handleForgotPwd();
        }
    };

    const handleForgotPwd = async () => {
        setLoading(true);
        try{
            await forgotPassword(email);
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
            navigation.goBack();
        }
    }

    return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <Headline2 text={"Restore Password"}/>
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <Input
                            label={"Email"}
                            onChangeText={text => handleOnchange(text, 'email')}
                            onFocus={() => handleError(null, 'email')}
                            iconName="email-outline"
                            placeholder="Enter your email address"
                            error={errors.email}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                            <Button title="Submit" onPress={validate}/>
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
    headingContainer: {
        alignItems: "center", 
        marginTop: 180
    },
    inputContainer: {
        marginVertical: 30, 
        marginHorizontal: 20
    },
    buttonContainer: {
        position: 'absolute', 
        bottom: 10, 
        width: '100%', 
        padding: 20
    }
  });
  
  export default RestorePassword