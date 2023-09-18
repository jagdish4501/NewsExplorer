import { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import Cards from './Card';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
const Explore = () => {
    const data = require('../sampleOutput.json').articles
    return (
        <GestureHandlerRootView style={styles.container}>
            <ScrollView>
                {data.map((content, index) => (
                    <Cards key={index} data={content} />
                ))}
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Explore;