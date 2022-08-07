import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, StatusBar, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Colors } from '../../src/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Buttons from '../components/Buttons';
import { useUserAuth } from '../../contexts/AuthProvider';


const Login = ({navigation}) => {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    const { login } = useUserAuth();
    // 8*2=16 =>16+5=21=>21*50=1050=> 1050+1767(6 si no paso happy)=2817 => 2817-1993=824

    const handleLogin = ()=>{
        if(formData.email === '' || formData.password === '' ){
            Alert.alert(
                'Aviso',
                'Complete los espacios en blanco :(!!',
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }else{
            login(formData.email, formData.password);
        }
        
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* login form section */}
            <View
                style={{
                    flex: 2,
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    paddingTop: 10,
                    paddingHorizontal: '3%',
                    justifyContent: 'center',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'OpenSans-SemiBold',
                            fontSize: 30,
                            color: Colors.black
                        }}
                    >
                        Bienvenido
                    </Text>
                    <Image
                        source={require('../assets/images/waving_hand.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
                <Text
                    style={{
                        fontFamily: "OpenSans-Regular",
                        fontSize: 14,
                        paddingTop: 10,
                        color: "#777"
                    }}
                >
                    Estamos feliz de verlo otra vez, usted puede continar logueandose!
                </Text>

                <View
                    style={{
                        flexDirection: 'column',
                        paddingTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ededed',
                            width: '95%',
                            borderRadius: 10,
                            height: 60,
                            paddingLeft: 20
                        }}
                    >
                        <Icon
                            name="mail-outline"
                            size={22}
                            color="#818181"
                        />
                        <TextInput
                            onChangeText={(text) => { setformData((prevState) => ({ ...prevState, email: text })) }}
                            style={styles.input}
                            placeholder="Ingrese correo"
                            placeholderTextColor="#818181"
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ededed',
                            width: '95%',
                            borderRadius: 10,
                            height: 60,
                            paddingLeft: 20,
                            marginTop: 20
                        }}
                    >
                        <Icon
                            name="finger-print-outline"
                            size={22}
                            color="#818181"
                        />
                        <TextInput
                            onChangeText={(text) => { setformData((prevState) => ({ ...prevState, password: text })) }}
                            style={styles.input}
                            placeholder="Ingrese contraseña"
                            secureTextEntry={true}
                            placeholderTextColor="#818181"
                        />
                    </View>

                    <View
                        style={{
                            width: '95%',
                            marginBottom: 10
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 17,
                                fontFamily: 'OpenSans-SemiBold',
                                color: '#818181',
                                alignSelf: 'flex-end',
                                paddingTop: 10
                            }}
                        >
                            ¿Olvidó su contraseña?
                        </Text>
                    </View>

                    <Buttons
                        btn_text={"Ingresar"}
                        on_press={handleLogin}
                    />
                </View>
            </View>

            {/* social login section */}
            <View
                style={{
                    flex: 2,
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    paddingHorizontal: '3%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontFamily: "OpenSans-Bold",
                        textAlign: 'center',
                        marginVertical: 35,
                        color: '#818181',
                        fontSize: 20
                    }}
                >
                    O
                </Text>

                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '95%'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => console.log("google login")}
                        style={styles.social_btn}
                    >
                        <Image
                            style={styles.social_img}
                            source={require('../assets/images/google_icon.png')}
                        />
                        <Text
                            style={{
                                width: '80%',
                                textAlign: 'center',
                                fontSize: 16,
                                fontFamily: 'OpenSans-Medium'
                            }}
                        >
                            Loguearse con Google
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("facebook login")}
                        style={styles.social_btn}
                    >
                        <Image
                            style={styles.social_img}
                            source={require('../assets/images/facebook_icon.png')}
                        />
                        <Text
                            style={{
                                width: '80%',
                                textAlign: 'center',
                                fontSize: 16,
                                fontFamily: 'OpenSans-Medium'
                            }}
                        >
                            Loguearse con Facebook
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        backgroundColor: '#fff',
                        marginBottom: 40
                    }}
                >
                    <Text
                        style={{
                            fontFamily: 'OpenSans-Medium',
                            fontSize: 17,
                            color: '#818181'
                        }}
                    >
                        ¿No tiene una cuenta?
                    </Text>
                    <Text
                        onPress={() => navigation.navigate('Register')}
                        style={{
                            fontSize: 18,
                            fontFamily: 'OpenSans-SemiBold',
                            color: '#333'
                        }}
                    >
                        Registrarse
                    </Text>
                </View>



            </View>

        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    social_btn: {
        height: 55,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    social_img: {
        width: 25,
        height: 25,
        marginLeft: 15
    }
})