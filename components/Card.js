import { useState } from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { StyleSheet, Share, View, Modal } from 'react-native';
import { WebView } from 'react-native-webview';
function Cards({ data }) {
    const [modalVisible, setModalVisible] = useState(false);
    //handleShare
    const handleShare = () => {
        const { url, title } = data; //get url and title form our prop
        var message = `${title} \n\n Read More ${url} \n\n Shared via The NewsExploer`; // custome message
        return Share.share(
            { title, message, url: message },
            { dialogTitle: `Share ${title}` }
        );
    }
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: data.urlToImage }} />
            <Card.Content>
                <Text style={styles.heading}>{data.title}</Text>
                <Text variant="bodyMedium" style={styles.content}>{data.content}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={handleShare}>Share</Button>
                <Button onPress={() => setModalVisible(!modalVisible)}>Read More</Button>
            </Card.Actions>
            <View style={styles.webView}>
                <WebView source={{ uri: 'https://reactnative.dev/' }} style={styles.webView} />
            </View>
        </Card>
    )
}

export default Cards;

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginBottom: 15,
    },
    heading: {
        fontWeight: 900,
        height: 70,
        overflow: 'hidden',
    },
    webView: {
        flex: 1,
    }
});