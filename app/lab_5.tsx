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
                onPress={()=>ToggleVisibility()}>
                        <Text style={styles.text}>
                            Call Api                        
                        </Text>
                    </TouchableOpacity>
            {toggle ? <CallApi/> : <></>}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#4f4f4f',
        borderRadius: 5,
        top: 250,
        width: 150,
        left: 100
    },
    text: {
        color: 'white',
        left: '30%'
    }
});