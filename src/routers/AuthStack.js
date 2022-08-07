import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding';
import LoginScreen from '../screens/Login';
import SplashScreen from '../screens/Splash';
import RegisterScreen from '../screens/Register';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();

const AuthStack = () => {

    return (
        // <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Navigator>
            <Stack.Screen options={{ header: () => null }} name='Splash' component={SplashScreen} />
            <Stack.Screen options={{ header: () => null }} name='Onboarding' component={OnboardingScreen} />
            <Stack.Screen options={{ header: () => null }} name='Login' component={LoginScreen} />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#fff',
                        shadowColor: '#fff',
                        elevation: 0,
                    },

                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <TouchableOpacity>
                                <Icon
                                    name="arrow-back-outline"
                                    size={25}
                                    backgroundColor="#fff"
                                    color="#333"
                                    onPress={() => navigation.navigate('Login')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
