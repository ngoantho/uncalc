import React, { useReducer } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import calculator, { init, initialState } from "./App/logic/calculator";

import Button from "./App/components/Button";
import Row from "./App/components/Row";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [state, dispatch] = useReducer(calculator, initialState);

  const handleTap = (type, value) => {
    dispatch({ type, value });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Text style={styles.prevValue}>
          {parseFloat(state.previousValue).toLocaleString()} {state.operator}
        </Text>
        <Text style={styles.value}>
          {parseFloat(state.currentValue).toLocaleString()}
        </Text>
        <Row>
          <Button
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />
          <Button
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />
          <Button
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />
          <Button
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleTap("number", 7)} />
          <Button text="8" onPress={() => handleTap("number", 8)} />
          <Button text="9" onPress={() => handleTap("number", 9)} />
          <Button
            text="*"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleTap("number", 4)} />
          <Button text="5" onPress={() => handleTap("number", 5)} />
          <Button text="6" onPress={() => handleTap("number", 6)} />
          <Button
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleTap("number", 1)} />
          <Button text="2" onPress={() => handleTap("number", 2)} />
          <Button text="3" onPress={() => handleTap("number", 3)} />
          <Button
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>
        <Row>
          <Button
            text="0"
            size="double"
            onPress={() => handleTap("number", 0)}
          />
          <Button text="." onPress={() => handleTap("number", ".")} />
          <Button text="=" theme="accent" onPress={() => handleTap("equal")} />
        </Row>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    maxWidth: 720,
    maxHeight: 1280,
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  prevValue: {
    color: "#a0a0a0",
    fontSize: 20,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
