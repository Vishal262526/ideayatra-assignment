import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface IButton {
  onPress: () => void;
  title: string;
}

const Button = ({ onPress, title }: IButton) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 16,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
