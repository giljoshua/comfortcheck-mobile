import { RoomCard, type RoomStatus } from "@/components/RoomCard";
import { SummaryCard } from "@/components/SummaryCard";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RoomData = {
  id: string;
  roomName: string;
  temperature: number;
  humidity: number;
  status: RoomStatus;
};

const ROOM_DATA: RoomData[] = [
  {
    id: "room-101",
    roomName: "Room 101",
    temperature: 22.3,
    humidity: 52,
    status: "comfortable",
  },
  {
    id: "room-102",
    roomName: "Room 102",
    temperature: 28.3,
    humidity: 57,
    status: "warm",
  },
  {
    id: "room-103",
    roomName: "Room 103",
    temperature: 31.6,
    humidity: 72,
    status: "hot",
  },
  {
    id: "room-104",
    roomName: "Room 104",
    temperature: 21.6,
    humidity: 53,
    status: "comfortable",
  },
  {
    id: "room-105",
    roomName: "Room 105",
    temperature: 26.1,
    humidity: 55,
    status: "warm",
  },
  {
    id: "room-106",
    roomName: "Room 106",
    temperature: 28.8,
    humidity: 62,
    status: "warm",
  },
  {
    id: "room-107",
    roomName: "Room 107",
    temperature: 24.8,
    humidity: 51,
    status: "comfortable",
  },
  {
    id: "room-108",
    roomName: "Room 108",
    temperature: 28.9,
    humidity: 60,
    status: "warm",
  },
];

const SUMMARY = [
  {
    emoji: "😊",
    label: "Comfortable Classrooms",
    count: 3,
    trend: "↑ 12% from yesterday",
    trendUp: true,
  },
  {
    emoji: "😐",
    label: "Warm Classrooms",
    count: 4,
    trend: "↑ 5% from yesterday",
    trendUp: true,
  },
  {
    emoji: "🔥",
    label: "Hot Classrooms",
    count: 1,
    trend: "↓ 3% from yesterday",
    trendUp: false,
  },
];

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function DashboardScreen() {
  const [lastUpdated, setLastUpdated] = useState(Date.now());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(() => {
    setLastUpdated(Date.now());
  }, []);

  const onPullRefresh = useCallback(() => {
    setRefreshing(true);
    refresh();
    setTimeout(() => setRefreshing(false), 400);
  }, [refresh]);

  useEffect(() => {
    if (!autoRefresh) return;
    const id = setInterval(refresh, 10000);
    return () => clearInterval(id);
  }, [autoRefresh, refresh]);

  const renderRoomItem = ({ item }: { item: RoomData }) => (
    <RoomCard
      roomName={item.roomName}
      temperature={item.temperature}
      humidity={item.humidity}
      status={item.status}
    />
  );

  const ListHeader = () => (
    <>
      <SafeAreaView edges={["top"]} style={styles.safeHeader}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>ComfortCheck</Text>
            <Text style={styles.subtitle}>
              Welcome back, Students, Instructor
            </Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.lastUpdated}>
              Last updated: {formatTime(new Date(lastUpdated))}
            </Text>
            <TouchableOpacity style={styles.refreshBtn} onPress={refresh}>
              <Text style={styles.refreshBtnText}>↻ Refresh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.autoRefreshBtn,
                autoRefresh && styles.autoRefreshOn,
              ]}
              onPress={() => setAutoRefresh((v) => !v)}
            >
              <Text
                style={[
                  styles.autoRefreshText,
                  autoRefresh
                    ? styles.autoRefreshTextOn
                    : styles.autoRefreshTextOff,
                ]}
              >
                Auto {autoRefresh ? "10s" : "OFF"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.summaryRow}
      >
        {SUMMARY.map((s, i) => (
          <SummaryCard
            key={i}
            emoji={s.emoji}
            label={s.label}
            count={s.count}
            trend={s.trend}
            trendUp={s.trendUp}
          />
        ))}
      </ScrollView>
    </>
  );

  const ListFooter = () => (
    <View style={styles.legend}>
      <Text style={styles.legendTitle}>Legend</Text>
      <View style={styles.legendRow}>
        <View style={[styles.legendDot, { backgroundColor: "#22c55e" }]} />
        <Text style={styles.legendText}>Comfortable (≤25°C)</Text>
      </View>
      <View style={styles.legendRow}>
        <View style={[styles.legendDot, { backgroundColor: "#f59e0b" }]} />
        <Text style={styles.legendText}>Warm (26–29°C)</Text>
      </View>
      <View style={styles.legendRow}>
        <View style={[styles.legendDot, { backgroundColor: "#ef4444" }]} />
        <Text style={styles.legendText}>Hot (≥30°C)</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={ROOM_DATA}
      renderItem={renderRoomItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      columnWrapperStyle={styles.roomRow}
      contentContainerStyle={styles.roomGrid}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onPullRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  safeHeader: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e2a3a",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  headerRight: {
    alignItems: "flex-end",
    gap: 6,
  },
  lastUpdated: {
    fontSize: 11,
    color: "#64748b",
  },
  refreshBtn: {
    backgroundColor: "#38bdf8",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  refreshBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  autoRefreshBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: "#e5e7eb",
  },
  autoRefreshOn: {
    backgroundColor: "#22c55e",
  },
  autoRefreshText: {
    fontSize: 11,
    fontWeight: "600",
  },
  autoRefreshTextOn: {
    color: "#fff",
  },
  autoRefreshTextOff: {
    color: "#64748b",
  },
  summaryRow: {
    paddingVertical: 16,
    paddingHorizontal: 14,
  },
  roomGrid: {
    paddingHorizontal: 14,
    paddingBottom: 24,
  },
  roomRow: {
    justifyContent: "space-between",
  },
  legend: {
    backgroundColor: "#fff",
    margin: 14,
    padding: 16,
    borderRadius: 10,
    gap: 8,
  },
  legendTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1e2a3a",
    marginBottom: 4,
  },
  legendRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 13,
    color: "#64748b",
  },
});
