// src/screens/HomeScreen.jsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ChevronDown, ChevronRight } from "lucide-react-native";

export default function HomeScreen() {
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const baseBars = [
    30, 32, 40, 55, 75, 85, 80, 70, 58, 55, 60, 75, 95, 120, 110, 100, 95, 105,
    120, 135, 150, 170, 190, 210,
  ];

  const monthIndex = months.indexOf(selectedMonth);
  const chartBars = baseBars.map((val, i) => {
    const offset = (monthIndex - 6) * 12 + (i % 2 === 0 ? 5 : -5);
    return Math.max(10, Math.min(200, val + offset));
  });

  return (
    <View style={styles.screenPadding}>
      <View style={styles.grid}>
        <View style={[styles.gridItem, { backgroundColor: "#6B373A" }]}>
          <Text style={styles.gridLabel}>Revenue</Text>
          <Text style={styles.gridValue}>$4.2M</Text>
          <Text style={styles.gridSubText}>Increase: 15%</Text>
        </View>
        <View style={[styles.gridItem, { backgroundColor: "#1D202D" }]}>
          <Text style={styles.gridLabel}>KPI Rate</Text>
          <Text style={styles.gridValue}>10.14</Text>
          <Text style={styles.gridSubText}>Rise: 8.08%</Text>
        </View>
        <View style={[styles.gridItem, { backgroundColor: "#334668" }]}>
          <Text style={styles.gridLabel}>Margin</Text>
          <Text style={styles.gridValue}>1,796</Text>
          <Text style={styles.gridSubText}>Target: 33%</Text>
        </View>
        <View style={[styles.gridItem, { backgroundColor: "#1D202D" }]}>
          <Text style={styles.gridLabel}>Gross Profit</Text>
          <Text style={styles.gridValue}>$93.3k</Text>
        </View>
        <View style={[styles.gridItem, { backgroundColor: "#1D202D" }]}>
          <Text style={styles.gridLabel}>Net Income</Text>
          <Text style={styles.gridValue}>$40.2k</Text>
        </View>
        <View style={[styles.gridItem, { backgroundColor: "#1D202D" }]}>
          <Text style={styles.gridLabel}>Total Reach</Text>
          <Text style={styles.gridValue}>2,969</Text>
        </View>
      </View>

      <View style={styles.chartHeader}>
        <TouchableOpacity
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}
          style={styles.monthSelector}
        >
          <Text style={styles.monthText}>{selectedMonth} Summary</Text>
          <ChevronDown size={18} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowBtn}>
          <ChevronRight size={16} color="#FFF" />
        </TouchableOpacity>
      </View>

      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {months.map((month) => (
            <TouchableOpacity
              key={month}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedMonth(month);
                setIsDropdownOpen(false);
              }}
            >
              <Text
                style={[
                  styles.dropdownItemText,
                  selectedMonth === month && { color: "#FFF" },
                ]}
              >
                {month}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Mobile Bar Chart Mockup */}
      <View style={styles.chartContainer}>
        {chartBars.slice(0, 12).map((height, i) => (
          <View key={i} style={styles.chartBarCol}>
            <View style={[styles.chartBar, { height: height / 1.5 }]} />
            <Text style={styles.chartBarLabel}>{i + 1}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenPadding: { paddingHorizontal: 24 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "31%",
    aspectRatio: 1,
    borderRadius: 20,
    padding: 12,
    marginBottom: 12,
    justifyContent: "space-between",
  },
  gridLabel: { color: "#A0AEC0", fontSize: 11, fontWeight: "500" },
  gridValue: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  gridSubText: { color: "#FFF", fontSize: 9, opacity: 0.8 },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  monthSelector: { flexDirection: "row", alignItems: "center", gap: 8 },
  monthText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: 8,
  },
  arrowBtn: { backgroundColor: "#272C3F", padding: 8, borderRadius: 20 },
  dropdown: {
    backgroundColor: "#1D202D",
    borderRadius: 12,
    position: "absolute",
    top: 50,
    left: 24,
    zIndex: 100,
    width: 150,
    padding: 8,
  },
  dropdownItem: { paddingVertical: 10, paddingHorizontal: 12 },
  dropdownItemText: { color: "#8F9BB3", fontSize: 14 },
  chartContainer: {
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 20,
  },
  chartBarCol: { alignItems: "center", width: 20 },
  chartBar: {
    width: 8,
    backgroundColor: "#7B31FF",
    borderRadius: 4,
    marginBottom: 8,
  },
  chartBarLabel: { color: "#4A5568", fontSize: 10 },
});
