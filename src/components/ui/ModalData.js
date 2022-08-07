import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ModalData = ({ modalTitle, onPress, onRequestClose, visible, ok, onPressData, cowOnChangeText, descOnChangeText, imgOnChangeText, priceOnChangeText }) => {
    return (
        <View style={styles.centeredView} >
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                // onRequestClose={() => {
                //     Alert.alert("Modal has been closed.");
                //     setModalVisible(!modalVisible);
                // }}
                onRequestClose={onRequestClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextTitle}>{modalTitle}</Text>
                        <Text style={styles.modalText}>Nombre:</Text>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={cowOnChangeText}
                            placeholder="Vaca"
                        />
                        <Text style={styles.modalText}>Descripción:</Text>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={descOnChangeText}
                            placeholder="Descripcion"
                        />
                        <Text style={styles.modalText}>Precio:</Text>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={priceOnChangeText}
                            placeholder="Precio"
                        />
                        <Text style={styles.modalText}>Imagen:</Text>
                        <TextInput
                            style={styles.formInput}
                            onChangeText={imgOnChangeText}
                            placeholder="Url imagen"
                        />

                        <View style={styles.buttonOptions}>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                // onPress={() => setModalVisible(!modalVisible)}
                                onPress={onPress}
                            >
                                <Text style={styles.textStyle}>{ok}</Text>
                            </Pressable>
                            <TouchableOpacity onPress={onPressData} style={[styles.button, styles.buttonClose]}>
                                <Text style={styles.textStyle}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalData;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalTextTitle: {
        marginBottom: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    formInput: {
        borderColor: '#85b4bc',
        borderWidth: 1,
        padding: 8,
        height: 40,
        width: '100%',
        borderRadius:5
    },
    buttonOptions:{
        marginTop:10,
        flexDirection:'row',
    }
})