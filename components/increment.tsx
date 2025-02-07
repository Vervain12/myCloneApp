import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

type Props = {
    value: number;
    setValue: (value: number) => void;
};

const IncrementButton: React.FC<Props> = ({ value, setValue }) =>
{
    return (
        <View style={styles.button_style}>
            <Button title="Increment" onPress={() => setValue(value + 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    button_style: {
        backgroundColor: '#71ff74',
        borderColor: '#00ff06',
        borderWidth: 3,
        borderTopLeftRadius: 7.5,
        borderTopRightRadius: 7.5,
        borderBottomLeftRadius: 7.5,
        borderBottomRightRadius: 7.5,
        left: -5
    },
})

export default IncrementButton;