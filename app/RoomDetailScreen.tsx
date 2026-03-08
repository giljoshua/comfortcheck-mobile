import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RoomDetailScreen() {
  const router = useRouter();
  const { roomName, temperature, humidity, status } = useLocalSearchParams<{
    roomName?: string;
    temperature?: string;
    humidity?: string;
    status?: string;
  }>();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.card}>
        <Text style={styles.title}>{roomName || "Room"}</Text>
        <Text style={styles.label}>Temperature</Text>
        <Text style={styles.value}>🌡️ {temperature ?? "—"}°C</Text>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>💧 {humidity ?? "—"}%</Text>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>
          {status ? status.charAt(0).toUpperCase() + status.slice(1) : "—"}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => router.back()}
      >
        <Text style={styles.backBtnText}>← Back to Dashboard</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
  },
  card: {
    backgroundColor: "#1e2a3a",
    borderRadius: 10,
    padding: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#94a3b8",
    marginTop: 12,
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  backBtn: {
    backgroundColor: "#38bdf8",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  backBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
