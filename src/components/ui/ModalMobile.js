import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalMobile = ({modalTitle, modalCowName, modalCowDesc, onPress, onRequestClose, visible, ok}) => {
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
                        <Text style={styles.modalText}>Nombre: {modalCowName}</Text>
                        <Text style={styles.modalText}>Descripción: {modalCowDesc}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            // onPress={() => setModalVisible(!modalVisible)}
                            onPress={onPress}
                        >
                            <Text style={styles.textStyle}>{ok}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ModalMobile;

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
        borderRadius: 20,
        padding: 10,
        elevation: 2
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
        fontWeight:'bold',
        textAlign: "center"
    }
})