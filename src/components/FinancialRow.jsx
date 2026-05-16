// src/components/FinancialRow.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FinancialRow({
  title,
  subtitle,
  value,
  valueColor,
  noBorder,
}) {
  return (
    <View style={[styles.finRow, !noBorder && styles.borderBottom]}>
      <View>
        <Text style={styles.finTitle}>{title}</Text>
        <Text style={styles.finSubtitle}>{subtitle}</Text>
      </View>
      <Text style={[styles.finValue, { color: valueColor }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  finRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: "#2A2E3D" },
  finTitle: { color: "#FFF", fontSize: 15, fontWeight: "bold" },
  finSubtitle: { color: "#8F9BB3", fontSize: 12, marginTop: 4 },
  finValue: { fontSize: 15, fontWeight: "bold" },
});
