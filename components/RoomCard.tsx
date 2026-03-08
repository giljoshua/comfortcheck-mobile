import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type RoomStatus = "comfortable" | "warm" | "hot";

export type RoomCardProps = {
  roomName: string;
  temperature: number;
  humidity: number;
  status: RoomStatus;
};

const STATUS_CONFIG = {
  comfortable: {
    emoji: "😊",
    label: "Comfortable",
    color: "#22c55e",
  },
  warm: {
    emoji: "😐",
    label: "Warm",
    color: "#f59e0b",
  },
  hot: {
    emoji: "🔥",
    label: "Hot",
    color: "#ef4444",
  },
};

export function RoomCard({
  roomName,
  temperature,
  humidity,
  status,
}: RoomCardProps) {
  const router = useRouter();
  const config = STATUS_CONFIG[status];

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: "/RoomDetailScreen",
          params: { roomName, temperature: String(temperature), humidity: String(humidity), status },
        })
      }
    >
      <View style={styles.header}>
        <Text style={styles.roomName}>{roomName}</Text>
        <View style={[styles.badge, { backgroundColor: config.color }]}>
          <Text style={styles.badgeText}>
            {config.emoji} {config.label}
          </Text>
        </View>
      </View>
      <Text style={styles.temp}>🌡️ {temperature}°C</Text>
      <Text style={styles.humidity}>💧 {humidity}%</Text>
      <Text style={styles.link}>Click for details →</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e2a3a",
    borderRadius: 10,
    padding: 14,
    flex: 1,
    margin: 6,
    minHeight: 140,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  roomName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },
  temp: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 4,
  },
  humidity: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  link: {
    fontSize: 12,
    color: "#38bdf8",
    fontWeight: "600",
  },
});
