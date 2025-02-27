import { StyleSheet, FlatList, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState } from "react";
import CallApi from '../components/callAPI';

export default function Lab() {
    const [toggle, setToggle] = useState(false);

    const ToggleVisibility = () => {
        setToggle(!toggle);
    }

    return (
        <View>
            <TouchableOpacity
            style={styles.button}
                onPress={()=>ToggleVisibility()}/>
            {toggle ? <CallApi/> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 5
    }
});