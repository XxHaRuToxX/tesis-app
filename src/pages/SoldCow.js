import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CardItem from '../components/ui/Card';
import { cows } from '../data/dataCows';

const SoldCow = () => {

    const [data, setData] = useState(cows);

    const Item = ({ title, desc, image, price }) => (
        <TouchableOpacity>
            <CardItem >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Image style={{ width: 100, height: 100, borderRadius: 6 }} source={{ uri: image }} />
                    </View>
                    <View>
                        <Text style={{color:'black', fontWeight:'bold'}}>{title}</Text>
                        <Text>{desc}</Text>
                    </View>
                    <Text style={{color:'black'}}>S/. {price}</Text>
                    <TouchableOpacity 
                        style={{
                            borderColor:'black', 
                            borderWidth:1, 
                            borderRadius:6, 
                            padding:5,
                            backgroundColor:'black'
                        }}>
                        <Text style={{color:'#fff'}}>Vender</Text>
                    </TouchableOpacity>
                </View>
            </CardItem>

        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.name} desc={item.description} image={item.image} price={item.price} />
    );

    return (
        <>
            <FlatList
                data={cows}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </>

    )
}

export default SoldCow

const styles = StyleSheet.create({})