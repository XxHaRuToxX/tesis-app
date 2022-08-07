import { ActivityIndicator, Animated, FlatList, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { foods } from '../data/dataFood';


const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const FoodPage = () => {

    const backgroundImg = 'https://wallpaperaccess.com/full/3297441.jpg';
    const Yscroll = React.useRef(new Animated.Value(0)).current;


    const oneFood = ({ item, index }) => {
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
            <Animated.FlatList
                data={foods}
                renderItem={oneFood}
                keyExtractor={foods => foods.id}
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
        </SafeAreaView>
    )
}

export default FoodPage;

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