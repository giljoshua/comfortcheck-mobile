import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🌡</Text>
        <Text style={styles.title}>Classroom Heat Monitor</Text>
        <Text style={styles.subtitle}>
          Real time temperature monitoring system
        </Text>

        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <View style={styles.roleRow}>
          <TouchableOpacity style={styles.activeBtn}>
            <Text style={styles.whiteText}>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.grayBtn}>
            <Text>Instructor</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.grayBtn}>
          <Text>Facilities (Desktop Only)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.whiteText}>Login</Text>
        </TouchableOpacity>

        <Link href="/Signup" asChild>
          <TouchableOpacity style={styles.linkBtn}>
            <Text style={styles.linkText}>Create an account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;

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

  roleRow: {
    flexDirection: "row",
    gap: 10,
  },

  activeBtn: {
    flex: 1,
    backgroundColor: "#f25c05",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },

  grayBtn: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },

  loginBtn: {
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
