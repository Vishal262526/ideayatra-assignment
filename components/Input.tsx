import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

interface IInput {
  placeholder: string;
  onChangeText: (value: string) => void;
  icon: JSX.Element;
  secureEntry?: boolean;
  validationError?: string;
}

const Input = ({
  placeholder,
  onChangeText,
  icon,
  secureEntry = false,
  validationError = "",
}: IInput) => {
  console.log(validationError);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {icon}
        <TextInput
          secureTextEntry={secureEntry}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={placeholder}
        />
      </View>

      {validationError && (
        <Text style={styles.validationErrorText}>{validationError}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontSize: 20,
  },
  input: {
    width: "100%",
    paddingVertical: 20.0,
  },
  validationErrorText: {
    color: "red",
    fontSize: 16,
    marginTop: 8,
  },
});
