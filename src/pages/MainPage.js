import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MainPage = () => {
    return (
        <View
        >
            <Text style={{
                color: 'black',
                marginBottom:20,
                fontWeight:'400',
                fontSize:20,
            }}>A tu aplicación de Gestión de Vacuno</Text>
            <Image
                source={require('../assets/images/cover-cow.jpg')}
                style={{
                    width: '100%',
                    height: 490,
                }}
            />
            
        </View>
    )
}

export default MainPage;

const styles = StyleSheet.create({
})