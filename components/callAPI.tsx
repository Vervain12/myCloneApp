import { StyleSheet, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";

export default function CallApi() {
    const [data, setData] = useState([]);

    const fetchAPI = async () => {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        
        try {
            const reply = await fetch(apiUrl)
            const data = await reply.json();
            setData(data);
        }
        catch (e) {
            console.error("Error: " + e)
        }
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    return (
        <View>
            <Text>{data.title}</Text>
            <Text>{data.body}</Text>
        </View>
    )
}