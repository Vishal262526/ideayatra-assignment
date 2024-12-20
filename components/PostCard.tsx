import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface IPostCard {
  title: string;
  body: string;
}

const PostCard = ({ title, body }: IPostCard) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },

  body: {
    fontSize: 16,
    color: "gray",
    marginTop: 8,
  },
});
