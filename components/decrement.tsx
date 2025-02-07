import { Link } from "expo-router";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

type Props = {
    value: number;
    setValue: (value: number) => void;
};

const DecrementButton: React.FC<Props> = ({ value, setValue }) =>
{
    return (
        <View style={styles.button_style}>
            <Button title="Decrement" onPress={() => setValue(value - 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    button_style: {
        backgroundColor: '#ff7f7f',
        borderColor: '#D2042D',
        borderWidth: 3,
        borderTopLeftRadius: 7.5,
        borderTopRightRadius: 7.5,
        borderBottomLeftRadius: 7.5,
        borderBottomRightRadius: 7.5,
        right: -5
    },
})

export default DecrementButton;