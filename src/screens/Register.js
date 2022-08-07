import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import Buttons from '../components/Buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useUserAuth } from '../../contexts/AuthProvider';

const Register = ({ navigation }) => {
    const [formData, setformData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const { register } = useUserAuth();

    const handleRegister = () => {
        if(formData.email === '' || formData.password === '' || formData.confirmPassword === '' ){
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
        }else if (formData.password !== formData.confirmPassword){
            Alert.alert(
                'Aviso',
                'Las contraseñas tienen que ser iguales !!!',
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
            register(formData.email, formData.password);
        }
        
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'column' }}>
            <View
                style={{
                    flex: 2,
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    paddingTop: 10,
                    paddingHorizontal: '1%',
                    justifyContent: 'center',
                }}
            >

                <View
                    style={{
                        flexDirection: 'column',
                        paddingTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text style={styles.text}>Crear una cuenta</Text>
                    <Image
                        source={require('../assets/images/logo192.png')}
                        style={styles.logo}
                    />
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
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#ededed',
                            width: '95%',
                            borderRadius: 10,
                            height: 60,
                            paddingLeft: 20,
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                    >
                        <Icon
                            name="finger-print-outline"
                            size={22}
                            color="#818181"
                        />
                        <TextInput
                            onChangeText={(text) => { setformData((prevState) => ({ ...prevState, confirmPassword: text })) }}
                            style={styles.input}
                            placeholder="Confirmar contraseña"
                            secureTextEntry={true}
                            placeholderTextColor="#818181"
                        />
                    </View>

                    <Buttons
                        btn_text={"Registrarse"}
                        on_press={handleRegister}
                    />
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>Al registrarse, usted esta confirmando que acepta nuestros</Text>
                        <TouchableOpacity onPress={() => alert('Terminos y condiciones clickeado!')}>
                            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terminos de servicios</Text>
                        </TouchableOpacity>
                        <Text style={styles.color_textPrivate}> y </Text>
                        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Politicas de Privacidad</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.navButtonText}>
                            ¿Ya tienes una cuenta? Ingresar
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
    },
});
