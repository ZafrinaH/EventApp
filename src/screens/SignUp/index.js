import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Keyboard } from "react-native";
import { signup } from "../../services/auth";
import Headline2 from "../../components/Headline2";
import Body2 from "../../components/Body2";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { COLORS } from "../../constants/styles";
import { useDispatch } from "react-redux";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/config";
import { User } from "firebase/auth";
import { setUser } from "../../redux/slices/user";

const SignUp = ({navigation}) => {
    const [inputs, setInputs] = useState({ email: '', password: '', confirmPassword: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
    
    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;
    
        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
          handleError('Please input a valid email', 'email');
          isValid = false;
        }
    
        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        }

        if(!inputs.confirmPassword) {
            handleError('Please confirm password', 'confirmPassword');
            isValid = false;
        } else if(inputs.password !== inputs.confirmPassword) {
            handleError('Passwords do not match', 'confirmPassword');
            isValid = false;
        }
    
        if (isValid) {
            handleSignUp();
        }
    };

    const handleSignUp = async () => {
        setLoading(true);
        try{
            const user = await signup(inputs.email, inputs.password);
            if(user){
                const userCollection = collection(db, 'user');
                const userDocRef = doc(userCollection, user.uid);
                const userData = {
                    email: inputs.email,
                    firstName: '',
                    id: user.uid,
                    isFirstTime: true,
                    lastName: '',
                    mailingAddress: '',
                    phoneNumber: ''
            }
        
            await setDoc(userDocRef, userData);
                dispatch(setUser(user));
                navigation.replace("Welcome");
            }
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleLogin = async () => {
        navigation.navigate("LogIn");
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <SafeAreaView style={styles.mainView}>
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <Headline2 text={"Welcome"}/>
                        <Body2 text={"Welcome to your Portal"}/>
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
                    
                        <Input
                            label={"Password"}
                            onChangeText={text => handleOnchange(text, 'password')}
                            onFocus={() => handleError(null, 'password')}
                            iconName="lock-outline"
                            placeholder="Enter your password"
                            error={errors.password}
                            password
                        />
                    
                        <Input
                            label={"Confirm Password"}
                            onChangeText={text => handleOnchange(text, 'confirmPassword')}
                            onFocus={() => handleError(null, 'confirmPassword')}
                            iconName="lock-outline"
                            placeholder="Re-enter your password"
                            error={errors.confirmPassword}
                            password
                        />
                    </View>
                
                    <View style={styles.buttonContainer}>
                        <Button title="Sign Up" onPress={validate}/>
                        <Button title="Login" onPress={handleLogin}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        minHeight: '100%'
    },
    mainView: {
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