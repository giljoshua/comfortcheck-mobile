import { Link } from "expo-router";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const SignupScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🌡</Text>
        <Text style={styles.title}>Classroom Heat Monitor</Text>
        <Text style={styles.subtitle}>
          Real time temperature monitoring system
        </Text>

        <TextInput style={styles.input} placeholder="Full Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <TextInput style={styles.input} placeholder="Select Role" />

        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.whiteText}>Sign up</Text>
        </TouchableOpacity>

        <Link href="/LoginScreen" asChild>
          <TouchableOpacity style={styles.linkBtn}>
            <Text style={styles.linkText}>Back to login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6d9cf",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    gap: 12,
  },

  icon: {
    fontSize: 32,
    textAlign: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },

  signupBtn: {
    backgroundColor: "#f25c05",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },

  linkBtn: {
    paddingVertical: 10,
    alignItems: "center",
  },

  linkText: {
    color: "#f25c05",
    fontSize: 14,
    fontWeight: "600",
  },

  whiteText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
