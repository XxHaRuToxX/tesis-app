import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';

const FlotingButton = ({ onPress, name }) => {

    // const buttons = () => {
    //     const result = [];
    //     params.forEach((it, index) => {
    //         const button = (
    //             <TouchableOpacity
    //                 key={index}
    //                 onPress={()=>it.onPress()}
    //                 style={styles.button}
    //             >
    //                 <Icon name={it.name} color='white' size={25} style={styles.icon}/>
    //                 {/* <Text>{it.text}</Text> */}
    //             </TouchableOpacity>
    //         )
    //         result.push(button)
    //     })
    //     return result;
    // }
    const buttons = (onPress, name) => (
        
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Icon name={name} color='white' size={25} style={styles.icon}/>
            {/* <Text>{it.text}</Text> */}
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapperIn}>{buttons(onPress, name)}</View>
        </View>
    )
}

export default FlotingButton;

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 100,
        height: 65,
        alignItems:'flex-end',
        alignSelf:'flex-end',
        padding: 10,
    },
    wrapperIn: {
        backgroundColor:'#242533',
        borderRadius:50,
        alignItems:'center',
        padding: 2,
        height: 50,
        width: 50,
        flexDirection:'column',
        // paddingLeft:20,
        // paddingRight:20,
        shadowColor:'#000',
        shadowOpacity:0.4,
        shadowOffset:{width:0, height:2},
        elevation:5,
    },
    button:{
        height: 45,
        width: 45,
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:5,
        paddingTop:5
    },
    icon:{
        alignSelf:'center'
    }
})