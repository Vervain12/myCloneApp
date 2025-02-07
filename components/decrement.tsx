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
        <View>
            <Button title="Decrement" onPress={() => setValue(value - 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    button_style: {
        
    },
})

export default DecrementButton;