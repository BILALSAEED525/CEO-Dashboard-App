// src/components/ProgressBar.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProgressBar({ segments, val, valColor }) {
  return (
    <View style={styles.progressRow}>
      <View style={styles.progressBarBg}>
        {segments.map((seg, i) => (
          <View
            key={i}
            style={{
              width: seg.w,
              height: "100%",
              backgroundColor: seg.c,
              borderRadius: 10,
            }}
          />
        ))}
      </View>
      <Text style={[styles.progressVal, { color: valColor }]}>{val}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  progressRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  progressBarBg: {
    flex: 1,
    height: 12,
    backgroundColor: "#2A2E3D",
    borderRadius: 10,
    flexDirection: "row",
  },
  progressVal: {
    width: 45,
    textAlign: "right",
    fontSize: 13,
    fontWeight: "bold",
  },
});
