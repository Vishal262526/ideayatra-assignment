import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

interface IHeader {
  title: string;
  onLogoutTap: () => void;
  onRefreshTap: () => void;
}

const Header = ({ title, onLogoutTap, onRefreshTap }: IHeader) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.iconContainer}>
        <Pressable onPress={onRefreshTap}>
          <Feather name="refresh-cw" size={24} color="black" />
        </Pressable>
        <Pressable onPress={onLogoutTap}>
          <AntDesign name="logout" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 500,
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});
