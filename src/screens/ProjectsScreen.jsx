// src/screens/ProjectsScreen.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProjectCard from "../components/ProjectCard";
import ProgressBar from "../components/ProgressBar";

export default function ProjectsScreen() {
  return (
    <View style={styles.screenPadding}>
      <Text style={styles.pageTitle}>Projects</Text>
      <Text style={styles.pageSubtitle}>ACTIVE DEVELOPMENT TRACKS</Text>

      <ProjectCard
        percent="23"
        title="Alpha Phase"
        subtitle="Milestone"
        color="#EF233C"
      />
      <ProjectCard
        percent="27"
        title="Beta Release"
        subtitle="Milestone"
        color="#F77F00"
      />
      <ProjectCard
        percent="34"
        title="Core Project"
        subtitle="Milestone"
        color="#F77F00"
      />

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Alpha Market Launch</Text>
          <Text style={styles.progressPriority}>Priority</Text>
        </View>
        <ProgressBar
          segments={[
            { w: "35%", c: "#4ADE80" },
            { w: "12%", c: "#D4E157" },
          ]}
          val="160%"
          valColor="#4ADE80"
        />
        <ProgressBar
          segments={[
            { w: "25%", c: "#4ADE80" },
            { w: "25%", c: "#FDD835" },
          ]}
          val="200%"
          valColor="#D4E157"
        />
        <ProgressBar
          segments={[{ w: "40%", c: "#4ADE80" }]}
          val="174%"
          valColor="#4ADE80"
        />
      </View>
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
  progressCard: {
    backgroundColor: "#1D202D",
    borderRadius: 24,
    padding: 20,
    marginTop: 20,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  progressTitle: { color: "#8F9BB3", fontSize: 12 },
  progressPriority: { color: "#8F9BB3", fontSize: 12 },
});
