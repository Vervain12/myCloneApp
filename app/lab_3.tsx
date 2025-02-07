import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import DecrementButton from "../components/decrement";
import IncrementButton from "../components/increment";

export default function App() {
    const [value, setValue] = useState(0);

    return(
        <View style={styles.lab_style}>
            <Text>My Value {value}</Text>
            <View style={styles.button_area}>
                <IncrementButton
                    value={value}
                    setValue={setValue}/>
                <DecrementButton 
                    value={value}
                    setValue={setValue}/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({ 
    lab_style: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_area: {
        flexDirection: 'row'
    },
})