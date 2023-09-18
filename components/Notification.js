import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';
const Notification = () => {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.container} timeout={5000} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Notification;