// src/screens/FinancialScreen.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronRight } from "lucide-react-native";
import FinancialRow from "../components/FinancialRow";

export default function FinancialScreen() {
  return (
    <View style={styles.screenPadding}>
      <Text
        style={[styles.pageTitle, { textAlign: "center", marginBottom: 24 }]}
      >
        Financial Figures
      </Text>

      <View style={styles.donutContainer}>
        <View style={styles.donutOuter}>
          <View style={styles.donutInner} />
        </View>
      </View>

      <View style={styles.financeHeader}>
        <Text style={styles.financeTitle}>Marketing Spend</Text>
        <TouchableOpacity style={styles.arrowBtn}>
          <ChevronRight size={16} color="#FFF" />
        </TouchableOpacity>
      </View>

      <FinancialRow
        title="Total Budget Allocation"
        subtitle="$391K / Q3 Target"
        value="+70.5%"
        valueColor="#4ADE80"
      />
      <FinancialRow
        title="Current Q3 Spend"
        subtitle="$315K - Used"
        value="$147K  +50%"
        valueColor="#4ADE80"
      />
      <FinancialRow
        title="R&D Allocation"
        subtitle="Fixed Asset Transfer"
        value="$36.3K  -36%"
        valueColor="#EF233C"
        noBorder={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 24 },
  pageTitle: { color: "#FFF", fontSize: 22, fontWeight: "bold", marginTop: 10 },
  donutContainer: { alignItems: "center", marginBottom: 40 },
  donutOuter: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "#4ADE80",
    justifyContent: "center",
    alignItems: "center",
  },
  donutInner: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#12141D",
  },
  financeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  financeTitle: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  arrowBtn: { backgroundColor: "#272C3F", padding: 8, borderRadius: 20 },
});
