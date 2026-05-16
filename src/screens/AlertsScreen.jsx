// src/screens/AlertsScreen.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AlertTriangle, Network, Check } from "lucide-react-native";
import AlertCard from "../components/AlertCard";

export default function AlertsScreen() {
  return (
    <View style={styles.screenPadding}>
      <Text style={styles.pageTitle}>Alerts</Text>
      <Text style={[styles.pageSubtitle, { marginBottom: 20 }]}>
        Notifications
      </Text>

      <AlertCard
        icon={AlertTriangle}
        iconColor="#EF233C"
        title="Revenue Dip Detected"
        desc1="Underlying cause undetermined"
        desc2="Server traffic normal"
        time="16:34"
        extraRight="Action"
      />
      <AlertCard
        icon={Network}
        iconColor="#3B82F6"
        title="Quarterly Report Ready"
        desc1="Generated automatically"
        desc2="Saved to secure cloud"
        time="14:15"
        extraRight="View"
      />
      <AlertCard
        icon={Check}
        iconColor="#22C55E"
        title="Server Maintenance Done"
        desc1="No further action required"
        desc2="All nodes operational"
        time="09:20"
        extraRight="Logged"
      />
      <AlertCard
        icon={Check}
        iconColor="#22C55E"
        title="Project Alpha Budget Approved"
        desc1="Team meeting scheduled"
        desc2="Funds allocated for Q4"
        time="Yesterday"
        extraRight="Done"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 24 },
  pageTitle: { color: "#FFF", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  pageSubtitle: {
    color: "#8F9BB3",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginTop: 4,
    marginBottom: 20,
  },
});
