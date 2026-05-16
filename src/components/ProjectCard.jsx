// src/components/ProjectCard.jsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronRight } from "lucide-react-native";

export default function ProjectCard({ percent, title, subtitle, color }) {
  return (
    <TouchableOpacity style={styles.projectCard}>
      <View style={styles.projectCardLeft}>
        <View style={[styles.percentCircle, { backgroundColor: color }]}>
          <Text style={styles.percentText}>{percent}%</Text>
        </View>
        <View>
          <Text style={styles.projectTitle}>{title}</Text>
          <Text style={styles.projectSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <ChevronRight size={20} color="#5F6A80" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  projectCard: {
    backgroundColor: "#1D202D",
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  projectCardLeft: { flexDirection: "row", alignItems: "center" },
  percentCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  percentText: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
  projectTitle: { color: "#FFF", fontSize: 15, fontWeight: "bold" },
  projectSubtitle: { color: "#8F9BB3", fontSize: 11, marginTop: 2 },
});
