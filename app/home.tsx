import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import PostCard from "@/components/PostCard";
import ApiEndpoints from "@/lib/apiEndpoints";

const Home = () => {
  const { username } = useLocalSearchParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiEndpoints.url);
      const data = await response.json();
      setPosts(data); // Update state with fetched data
      setLoading(false); // Set loading to false after fetching
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Header
          onRefreshTap={fetchPosts}
          onLogoutTap={() => router.replace({ pathname: "/" })}
          title={username as string}
        />

        <View style={styles.main}>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <PostCard title={item["title"]} body={item["body"]} />
              )}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },

  container: {
    padding: 16,
  },

  main: {
    width: "100%",
    height: "100%",
  },
});
