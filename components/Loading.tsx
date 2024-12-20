import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Iloading {
  loading: boolean;
}

const Loading = ({ loading }: Iloading) => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading && <ActivityIndicator size={"large"} />}
    </View>
  );
};

export default Loading;
