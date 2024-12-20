import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Index = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleLogIn = () => {
    let localUsernameError = "";
    let localPasswordError = "";

    if (!usernameRef.current) {
      localUsernameError = "Username is required";
    }

    if (!passwordRef.current) {
      localPasswordError = "Password is required";
    }

    if (localUsernameError || localPasswordError) {
      setUsernameError(localUsernameError);
      setPasswordError(localPasswordError);
      return;
    }

    router.push({
      pathname: "/home",
      params: { username: usernameRef.current },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Enter details to continue</Text>

        <Input
          onChangeText={(value) => (usernameRef.current = value)}
          icon={<AntDesign name="user" size={24} color="black" />}
          placeholder="Username"
          validationError={usernameError}
        />

        <Input
          secureEntry
          onChangeText={(value) => (passwordRef.current = value)}
          icon={<AntDesign name="lock" size={24} color="black" />}
          placeholder="Password"
          validationError={passwordError}
        />

        <Pressable>
          <Text style={styles.forgetText}>Forget Password?</Text>
        </Pressable>

        <Button title="LOG IN" onPress={handleLogIn} />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 20,
    color: "gray",
    marginBottom: 30,
  },

  forgetText: {
    fontSize: 18,

    textAlign: "right",
    marginBottom: 25,
  },
});
