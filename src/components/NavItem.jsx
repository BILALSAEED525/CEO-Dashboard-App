// src/components/NavItem.jsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.navItem}>
      <Icon size={24} color={active ? "#FFF" : "#5F6A80"} />
      <Text style={[styles.navText, active && { color: "#FFF" }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navItem: { alignItems: "center" },
  navText: { color: "#5F6A80", fontSize: 10, marginTop: 4, fontWeight: "bold" },
});
