import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CowDetailsPage = ({ route }) => {

    const {cowName, cowDesc } = route.params;

    return (
        <View>
            <Text>{cowName}</Text>
            <Text>{cowDesc}</Text>
        </View>
    )
}

export default CowDetailsPage

const styles = StyleSheet.create({})