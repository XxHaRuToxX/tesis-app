import { ActivityIndicator, Animated, FlatList, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { cows } from '../data/dataCows';
import FlotingButton from '../components/FlotingButton';
import ModalMobile from '../components/ui/ModalMobile';
import ModalData from '../components/ui/ModalData';

import firestore from '@react-native-firebase/firestore';


const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const CowsPage = () => {

    const [cowsData, setCowsData] = useState([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleData, setModalVisibleData] = useState(false);
    // const [modalData, setModalData] = useState([]);
    const [modalCowName, setModalCowName] = useState('');
    const [modalCowDesc, setModalCowDesc] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const backgroundImg = 'https://wallpaperaccess.com/full/3297441.jpg';
    const Yscroll = React.useRef(new Animated.Value(0)).current;


    const saveData = async ()=>{

        try {
            await firestore().collection('vaca').add({
                name,
                description,
                image,
                price,
            }).then(()=>{
                console.log('Registro guardado');
            })
        } catch (error) {
            console.log(error)
        }
       
    }

    const getCowData = async () =>{
        try {
            const cows = await firestore().collection('vaca').get();
            const cow = cows.docs;

            setCowsData(cow)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getCowData()
    }, []);
    
    const openSettingsModal = (title, cowName, cowDesc) => {
        setModalTitle(title);
        setModalCowName(cowName);
        setModalCowDesc(cowDesc);
        setModalVisible(!modalVisible);
    }

    const openModalData = (title) => {
        setModalTitle(title);
        setModalVisibleData(!modalVisibleData);
    }

    const oneCow = ({ item, index }) => {
        const scale = Yscroll.interpolate({
            inputRange: [
                -1, 0,
                sizeOfItem * index,
                sizeOfItem * (index + 2)
            ],
            outputRange: [1, 1, 1, 0]
        })
        return (
            <Animated.View
                style={
                    [styles.item,
                    {
                        transform: [{ scale }]
                    }
                    ]
                }
            >

                <Image
                    source={{ uri: item.image }}
                    resizeMode='contain'
                    style={styles.image}
                    contentContainerStyle={{ padding: 20 }}

                />
                <View
                    style={styles.wrapText}
                >
                    <Text
                        style={styles.fontSize}
                    >
                        {item.name}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                    // onPress={() => navigation.navigate('CowDetails', {
                    //     cowName: item.name,
                    //     cowDesc: item.description
                    // })}
                    onPress={() => openSettingsModal(modalTitle, item.name, item.description)}
                >
                    <Text
                        style={{
                            color: 'black',
                        }}
                    >
                        Detalles
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }

    const renderLoader = () => {
        return (
            <View
                style={styles.loaderStyle}
            >
                <ActivityIndicator size='large' color='#aaa' />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image
                source={{ uri: backgroundImg }}
                style={{ ...StyleSheet.absoluteFillObject, height: 650 }}
                blurRadius={5}
            />
            <ModalMobile 
                modalCowDesc={modalCowDesc} 
                modalCowName={modalCowName} 
                modalTitle={'Detalles de la vaca'} 
                visible={modalVisible}
                ok={'OK'}
                onPress={()=>setModalVisible(!modalVisible)}
                onRequestClose={()=>setModalVisible(!modalVisible)}
                
            />
            <Animated.FlatList
                data={cows}
                renderItem={oneCow}
                keyExtractor={cows => cows.id}
                contentContainerStyle={{
                    padding: 20
                }}
                onScroll={
                    Animated.event(
                        [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                        { useNativeDriver: true }
                    )}
                ListFooterComponent={renderLoader}
                ListEmptyComponent={<Text>Procesando datos...</Text>}
            />
            {/* <FlotingButton
                params={[
                    {onPress:()=>navigation.navigate('CowForm'), name: 'add-outline'},
                ]}
            /> */}
            {/* <FlotingButton onPress={() => navigation.navigate('CowForm')} name="add-outline" /> */}
            <ModalData 
                modalTitle={"Nuevo registro de vaca"}
                visible={modalVisibleData}
                ok={"Cancelar"}
                onPress={()=>setModalVisibleData(!modalVisibleData)}
                onPressData={saveData}
                onRequestClose={()=>setModalVisibleData(!modalVisibleData)}
                cowOnChangeText={(text)=>setName(text)}
                descOnChangeText={(text)=>setDescription(text)}
                imgOnChangeText={(text)=>setImage(text)}
                priceOnChangeText={(text)=>setPrice(text)}
            />
            <FlotingButton onPress={() => openModalData(modalTitle)} name="add-outline" />
        </SafeAreaView>
    )
}

export default CowsPage;

const styles = StyleSheet.create({

    fontSize: {
        fontSize: 18
    },
    image: {
        width: 100,
        height: imgHeight
    },
    wrapText: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        marginBottom: marginBottomItem,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 30,
        padding: paddingItem
    },
    container: {
        flex: -1,
        height: '100%'
    },
    loaderStyle: {
        marginVertical: 16,
        alignItems: 'center'
    },
    // modal
    
})