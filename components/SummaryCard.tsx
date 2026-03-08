import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SummaryCardProps = {
  emoji: string;
  label: string;
  count: number;
  trend: string;
  trendUp: boolean;
};

export function SummaryCard({
  emoji,
  label,
  count,
  trend,
  trendUp,
}: SummaryCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.count}>{count}</Text>
      <Text style={[styles.trend, trendUp ? styles.trendUp : styles.trendDown]}>
        {trend}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    minWidth: 140,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  emoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 4,
  },
  count: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e2a3a",
  },
  trend: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: "600",
  },
  trendUp: {
    color: "#22c55e",
  },
  trendDown: {
    color: "#ef4444",
  },
});
