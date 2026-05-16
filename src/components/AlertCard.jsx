// src/components/AlertCard.jsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AlertCard({
  icon: Icon,
  iconColor,
  title,
  desc1,
  desc2,
  time,
  extraRight,
}) {
  return (
    <TouchableOpacity style={styles.alertCard}>
      <View style={[styles.alertIconBg, { backgroundColor: iconColor }]}>
        <Icon size={22} color="#FFF" />
      </View>
      <View style={styles.alertBody}>
        <View>
          <Text style={styles.alertTitle}>{title}</Text>
          <Text style={styles.alertDesc}>{desc1}</Text>
          <Text style={styles.alertDesc}>{desc2}</Text>
        </View>
        <View style={styles.alertRight}>
          <Text style={styles.alertTime}>{time}</Text>
          <Text style={styles.alertAction}>{extraRight}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  alertCard: {
    backgroundColor: "#1D202D",
    borderRadius: 24,
    padding: 16,
    flexDirection: "row",
    marginBottom: 16,
  },
  alertIconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  alertBody: { flex: 1, flexDirection: "row", justifyContent: "space-between" },
  alertTitle: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  alertDesc: { color: "#8F9BB3", fontSize: 12, marginTop: 2 },
  alertRight: { alignItems: "flex-end", justifyContent: "space-between" },
  alertTime: { color: "#5F6A80", fontSize: 12 },
  alertAction: { color: "#8F9BB3", fontSize: 11 },
});
