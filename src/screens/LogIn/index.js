import { useEffect, useState } from "react";
import { View, SafeAreaView, Keyboard, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";

import { login } from "../../services/auth";
import { auth, db } from "../../config/config";
import Headline2 from "../../components/Headline2";
import Body2 from "../../components/Body2";
import { COLORS } from "../../constants/styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import ForgotPassword from "../../components/ForgotPassword";
import { setUser } from "../../redux/slices/user";

const Login = ({navigation}) => {
    const [inputs, setInputs] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
      
            if(user){
                dispatch.setUser(user);
            }
        });
    });

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!inputs.email) {
          handleError('Please input email', 'email');
          isValid = false;
        }

        if (!inputs.password) {
          handleError('Please input password', 'password');
          isValid = false;
        }
        
        if (isValid) {
          handleLogin();
        }
    };
    
    const handleLogin = async () => {
        setLoading(true);
        try{
            const user = await login(inputs.email, inputs.password);
            if(user){
                dispatch(setUser(user.uid));
                const userCollection = doc(db, 'user', user.uid);
                const userDocRef = await getDoc(userCollection);
        
                if(userDocRef.exists()) {
                    if(userDocRef.data().isFirstTime){
                        navigation.replace("Welcome");
                    }
                }
            }
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const handleSignUp = async () => {
        navigation.navigate("SignUp");
    }

    const handleForgotPwd = async () => {
        navigation.navigate("RestorePassword");
    }

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
    
    const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
    };

    return(
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <SafeAreaView style={styles.mainContainer}>
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
                    
                        <View style={styles.forgotPwd}>
                            <ForgotPassword title={"Restore password"} onPress={handleForgotPwd}/>
                        </View>
                    </View>
                    
                    <View style={styles.buttonContainer}>
                        <Button title="Login" onPress={validate}/>
                        <Button title="Sign Up" onPress={handleSignUp}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {flex: 1},
    contentContainer: {minHeight: '100%'},
    mainContainer: {backgroundColor: COLORS.white, flex: 1},
    headingContainer: {alignItems: "center", marginTop: 180},
    inputContainer: {marginVertical: 30, marginHorizontal: 20},
    forgotPwd: {alignItems: 'flex-end'},
    buttonContainer: {position: 'absolute', bottom: 10, width: '100%', padding: 20}
});