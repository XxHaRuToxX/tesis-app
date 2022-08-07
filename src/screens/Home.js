import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { useUserAuth } from '../../contexts/AuthProvider';

import Profile from '../assets/drawer/profile.png';

import Photo from '../assets/drawer/photo.jpg';
import MainPage from '../pages/MainPage';
import CowsPage from '../pages/CowsPage';
import FoodPage from '../pages/FoodPage';
import SoldCow from '../pages/SoldCow';



const Home = () => {

    const { user } = useUserAuth();
    const [currrentTab, setCurrrentTab] = useState("Bienvenid@");
    const [showMenu, setShowMenu] = useState(false);

    const offsetValue = useRef(new Animated.Value(0)).current;
    // la Escala inicialmente debe ser uno
    const scaletValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;


    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                justifyContent: 'flex-start',
                padding: 20
            }} >
                <Image
                    source={Profile}
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                        marginTop: 8,
                    }}
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                        marginTop: 20,
                    }}
                >
                    Jenna Ezarik
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            marginTop: 6,
                            color: 'white'
                        }}
                    >
                        View profile
                    </Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexGrow: 1,
                        marginTop: 10
                    }}
                >
                    {
                        TabButton(currrentTab, setCurrrentTab, "Bienvenid@", 'home-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Vacas", 'paw-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Alimentación", 'leaf-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "En venta", 'logo-bitcoin')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Mapa vacuno", 'navigate-outline')
                    }
                    
                    {
                        TabButton(currrentTab, setCurrrentTab, "Datos veterinarios", 'medkit-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Reproducciones", 'recording-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Producción de carne", 'restaurant-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Producción de leche", 'beaker-outline')
                    }
                    {
                        TabButton(currrentTab, setCurrrentTab, "Reportes", 'document-text-outline')
                    }
                </View>
                <View>
                    {
                        TabButton(currrentTab, setCurrrentTab, "Salir", 'log-out-outline')
                    }
                </View>
            </View>

            {/* Sobre la vista del lay */}
            <Animated.View
                style={{
                    flexGrow: 1,
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    // bottom: -50,
                    left: 0,
                    right: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 20,
                    borderRadius: showMenu ? 15 : 0,
                    // Transformando la vista...
                    transform: [
                        {
                            scale: scaletValue
                        },
                        {
                            translateX: offsetValue
                        }
                    ]
                }}
            >
                {/* Boton de menu */}
                <Animated.View
                    style={{
                        transform: [
                            {
                                translateY: closeButtonOffset
                            }
                        ]
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            Animated.timing(scaletValue, {
                                toValue: showMenu ? 1 : 0.88,
                                duration: 300,
                                useNativeDriver: true,
                            }).start()

                            Animated.timing(offsetValue, {
                                // tu valor random
                                toValue: showMenu ? 0 : 230,
                                duration: 300,
                                useNativeDriver: true,
                            }).start()

                            Animated.timing(closeButtonOffset, {
                                // tu valor random
                                toValue: !showMenu ? -30 : 0,
                                duration: 300,
                                useNativeDriver: true,
                            }).start()
                            setShowMenu(!showMenu);
                        }}
                    >
                        {/* <Image
                            source={showMenu ? Close : Menu}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'black',
                                marginTop: 20,
                            }}
                        /> */}
                        <Icon
                            name={showMenu ? 'close-outline' : 'menu-outline'}
                            size={30}
                            color='black'
                            style={{
                                marginTop:20
                            }}
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black',
                            paddingTop: 20,
                        }}
                    >
                        {currrentTab}
                    </Text>

                    {currrentTab === 'Bienvenid@' && <MainPage/> }
                    {currrentTab === 'Vacas' && <CowsPage/> }
                    {currrentTab === 'Alimentación' && <FoodPage/> }
                    {currrentTab === 'En venta' && <SoldCow/> }
                    {/* <Image
                        source={Photo}
                        style={{
                            width: '100%',
                            height: 300,
                            borderRadius: 15,
                            marginTop: 20,
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            paddingTop: 15,
                            paddingBottom: 5,
                            color: 'black',
                        }}
                    >
                        Correo: {user.email}
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                        }}
                    >
                        Ingeniero agronomo, y medico veterianario.
                    </Text> */}
                </Animated.View>
            </Animated.View>
        </SafeAreaView>
    )
}

export default Home;

const TabButton = (currrentTab, setCurrrentTab, title, image) => {

    const { user, logout } = useUserAuth();

    return (
        <TouchableOpacity
            onPress={() => {
                if (title === 'Salir') {
                    // Hacer algo
                    logout();
                } else {
                    setCurrrentTab(title)
                }
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    backgroundColor: currrentTab === title ? 'white' : 'transparent',
                    paddingLeft: 13,
                    paddingRight: 15,
                    borderRadius: 8,
                    marginTop: 10
                }}
            >
                {/* <Image
                    source={image}
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: currrentTab === title ? '#5359d1' : 'white',
                    }}
                /> */}
                <Icon
                    name={image}
                    size={18}
                    color={currrentTab === title ? '#5359d1' : 'white'}
                />
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                        color: currrentTab === title ? '#5359d1' : 'white',
                    }}
                >
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5359d1',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})