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
        <View>
            <Button title="Increment" onPress={() => setValue(value + 1)}/>
        </View>
    )
}

export default IncrementButton;