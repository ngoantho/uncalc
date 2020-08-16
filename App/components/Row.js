import React from "react";
import { View } from "react-native";

export default function ({ children }) {
  return <View style={{ flexDirection: "row" }}>{children}</View>;
}
