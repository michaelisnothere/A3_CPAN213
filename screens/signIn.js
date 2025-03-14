import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import GlobalStyles from "../shared/styles";

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={GlobalStyles.Login}>
            <Text style={GlobalStyles.Header}>Sign In</Text>
            <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 16}}
            >Enter in login info below</Text>
            <TextInput
                style={GlobalStyles.textIn}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={GlobalStyles.textIn}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />        
            <TouchableOpacity 
                style={GlobalStyles.loginButton}
                onPress={() => {
                    if(username !== 'admin' && password !== 'admin'){
                        Alert.alert("Wrong Username or Password")
                    }else if(username == 'admin' && password == 'admin'){
                        console.log("Username:", username);
                        console.log("Password:", password);
                        navigation.navigate('Dashboard', { username: username, password: password });
                    }
                }}
            >
                <Text style={GlobalStyles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignIn;