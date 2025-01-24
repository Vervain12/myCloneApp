import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface ButtonTemplateProps {
  color?: string;
  width?: number;
  link: string;
  text: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  color,
  width,
  link,
  text,
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color, width: width }]}
      onPress={() => router.push(link)}>
      <Text style={styles.buttonText}>{text}</Text>
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