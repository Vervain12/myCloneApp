import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import { useRouter } from "expo-router";


type ButtonTemplateProps = { // Declaring the variable types
    link: string;
    text: string;
    color: string;
    width?: number;
};

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({ link, text, color, width }) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color, width: width }]}
            onPress={() => router.push(link)}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ButtonTemplate;