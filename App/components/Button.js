import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

import React from "react";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  buttonMultDown: {
    paddingTop: 10,
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [
    styles.button,
    size === "double" && styles.buttonDouble,
    theme === "secondary"
      ? styles.buttonSecondary
      : theme === "accent" && styles.buttonAccent,
    text === "*" && styles.buttonMultDown,
  ].filter(Boolean);
  const textStyles = [
    styles.text,
    theme === "secondary" && styles.textSecondary,
  ].filter(Boolean);

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
