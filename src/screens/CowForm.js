import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const CowForm = () => {

    const [currentValue, setCurrentValue] = useState('');
    const [subValues, setSubValues] = useState([]);

    const handleText = (text)=>{
        setCurrentValue((prevState)=>({
            ...prevState, currentValue:text
        }))
        console.log(text)
    }

    const submitData = () =>{
        let value = currentValue;
        if(value && value.length > 2){
            setSubValues((prevState)=>([
                ...prevState, subValues
            ]))
        }
        console.log(value);
    }

    return (
        <View style={styles.container}>
            <View style={styles.row} >
                <TextInput
                    style={styles.formInput}
                    onChangeText={text=>handleText(text)}
                    placeholder="Vaca"
                />
                <TouchableOpacity
                    onPress={submitData}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CowForm;

const styles = StyleSheet.create({
    row:{
        justifyContent:'space-between',
        alignSelf:'stretch',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:32,
    },
    container:{
        width: 300,
        alignSelf:'center',
        alignItems:'center',
        marginTop:32
    },
    formInput:{
        borderColor:'#85b4bc',
        borderWidth:1,
        padding: 8,
        height: 50,
        width: '75%'
    }
})