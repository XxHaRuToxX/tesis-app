import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../src/constants';
import Buttons from '../components/Buttons';

const Onboarding = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            {/* Handshake image */}
            <View style={{ flex: 3, flexDirection: 'column', backgroundColor: '#ddd' }}>
                <ImageBackground
                    source={require('../assets/images/handshake.png')}
                    style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}
                />
            </View>
            {/* button and text */}
            <View style={{flex:2, backgroundColor:'#fff'}} >
                <View 
                    style={{
                        flex:1, 
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'center',
                        backgroundColor:'#fff'
                    }} 
                >
                    <Text style={{fontFamily:'OpenSans-Bold', color:Colors.black, fontSize:30}} >XxHaRuToxX</Text>
                    <Text style={{
                        maxWidth:'50%',
                        fontFamily:'OpenSans-Medium',
                        color: '#999',
                        fontSize:14,
                        textAlign:'center',
                        paddingTop:10,
                    }}>Todo lo nuevo en un lugar, se el primero en saberlo!</Text>
                </View>
                <View style={{flex:1, flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
                    <Buttons on_press={() => navigation.navigate('Login')} btn_text="Empezar" />

                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})