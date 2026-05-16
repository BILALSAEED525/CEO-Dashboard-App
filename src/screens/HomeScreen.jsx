import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  LogOut,
} from "lucide-react-native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
  const [selectedMonth, setSelectedMonth] = useState("July");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Controls the new right sidebar

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.removeItem("@ceo_auth_token");
      setIsSidebarOpen(false); // Close sidebar as they are logged out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <View style={styles.screenPadding}>
      {/* NEW: Top Right Menu Icon */}
      <View style={styles.topMenuContainer}>
        <TouchableOpacity
          onPress={() => setIsSidebarOpen(true)}
          style={styles.menuButton}
        >
          <Menu size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* NEW: Right Sidebar Modal */}
      <Modal visible={isSidebarOpen} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          {/* Invisible clickable area to close sidebar */}
          <TouchableOpacity
            style={styles.modalCloseArea}
            onPress={() => setIsSidebarOpen(false)}
            activeOpacity={1}
          />

          {/* The Actual Sidebar */}
          <View style={styles.sidebar}>
            <TouchableOpacity
              onPress={() => setIsSidebarOpen(false)}
              style={styles.closeBtn}
            >
              <X size={24} color="#FFF" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={handleSignOut}>
              <LogOut size={20} color="#EF233C" />
              <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- YOUR ORIGINAL UI BELOW (UNTOUCHED) --- */}
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

  /* NEW SIDEBAR STYLES */
  topMenuContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 15,
    marginTop: -10, // Pulls it up slightly so it fits perfectly
  },
  menuButton: {
    paddingTop: 26,
    padding: 8,
    // backgroundColor: "#1D202D",
    borderRadius: 8,
    display: "flex",
    position: "relative",
    top: -20, // Adjust this value to perfectly center the icon in the notch
  },
  modalOverlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Darkens the background when open
  },
  modalCloseArea: {
    flex: 1, // Takes up all the space to the left of the sidebar
  },
  sidebar: {
    width: 220,
    backgroundColor: "#12141D",
    padding: 24,
    paddingTop: 60, // Clears the notch on phones
    shadowColor: "#000",
    shadowOffset: { width: -5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  closeBtn: {
    alignSelf: "flex-end",
    marginBottom: 40,
    padding: 5,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1D202D",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2E3D",
    gap: 12,
  },
  logoutText: {
    color: "#EF233C",
    fontWeight: "bold",
    fontSize: 16,
  },

  /* YOUR ORIGINAL STYLES */
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
    left: 0,
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
