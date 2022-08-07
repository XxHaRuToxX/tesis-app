import React, { createContext, useContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {

            await auth().signInWithEmailAndPassword(email, password);

        } catch (error) {
            switch (error.code) {
                case "auth/invalid-email":
                    return Alert.alert(
                        'Aviso',
                        'Correo inválido!!',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                case "auth/user-not-found":
                    return Alert.alert(
                        'Aviso',
                        'Usuario no encontrado :(!!',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                case "auth/wrong-password":
                    return Alert.alert(
                        'Aviso',
                        'Contraseña incorrecta :(!!',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );

                default:
                    return Alert.alert(
                        'Aviso',
                        'Falló la autenticación, inténtelo más tarde :(!!',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
            }
        }
    }

    const register = async (email, password) => {
        try {

            await auth().createUserWithEmailAndPassword(email, password);

        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    return Alert.alert(
                        'Aviso',
                        'El correo ya está en uso, lo sentimos :(',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                case "auth/invalid-email":
                    return Alert.alert(
                        'Aviso',
                        'Correo inválido, ingrese uno correcto por favor',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                default:
                    return Alert.alert(
                        'Aviso',
                        'Falló lel registro, inténtelo más tarde :(!!',
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
            }
        }
    }

    const logout = async () => {
        try {

            await auth().signOut();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(AuthContext);
}