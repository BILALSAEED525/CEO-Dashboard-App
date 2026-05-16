// App.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  Home,
  Folder,
  Bell,
  TrendingUp,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react-native";

// Import Screens
import LockScreen from "./src/screens/LockScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProjectsScreen from "./src/screens/ProjectsScreen";
import FinancialScreen from "./src/screens/FinancialScreen";
import AlertsScreen from "./src/screens/AlertsScreen";

// Import Components
import NavItem from "./src/components/NavItem";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#12141D" />

      {/* Top Status Bar Mock */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>19:43</Text>
        <View style={styles.statusIcons}>
          <Signal size={14} color="#FFF" />
          <Wifi size={14} color="#FFF" style={{ marginHorizontal: 4 }} />
          <BatteryFull size={15} color="#FFF" />
        </View>
      </View>

      <View style={styles.content}>
        {!isAuthenticated ? (
          <LockScreen onUnlock={() => setIsAuthenticated(true)} />
        ) : (
          <>
            {/* Header */}
            <View style={styles.header}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
                }}
                style={styles.profilePic}
              />
              <View>
                <Text style={styles.headerName}>Fratity Deal</Text>
                <Text style={styles.headerTitle}>CEO at linagie</Text>
              </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            >
              {activeTab === "Home" && <HomeScreen />}
              {activeTab === "Projects" && <ProjectsScreen />}
              {activeTab === "Financial Analysis" && <FinancialScreen />}
              {activeTab === "Alerts" && <AlertsScreen />}
            </ScrollView>
          </>
        )}
      </View>

      {/* Bottom Navigation */}
      {isAuthenticated && (
        <View style={styles.bottomNav}>
          <NavItem
            icon={Home}
            label="Home"
            active={activeTab === "Home"}
            onClick={() => setActiveTab("Home")}
          />
          <NavItem
            icon={Folder}
            label="Projects"
            active={activeTab === "Projects"}
            onClick={() => setActiveTab("Projects")}
          />
          <NavItem
            icon={Bell}
            label="Alerts"
            active={activeTab === "Alerts"}
            onClick={() => setActiveTab("Alerts")}
          />
          <NavItem
            icon={TrendingUp}
            label="Finance"
            active={activeTab === "Financial Analysis"}
            onClick={() => setActiveTab("Financial Analysis")}
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#12141D",
  },
  statusText: { color: "#FFF", fontSize: 13, fontWeight: "600" },
  statusIcons: { flexDirection: "row", alignItems: "center" },
  content: { flex: 1, backgroundColor: "#12141D" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 20,
  },
  profilePic: { width: 44, height: 44, borderRadius: 22, marginRight: 12 },
  headerName: { color: "#FFF", fontSize: 17, fontWeight: "bold" },
  headerTitle: { color: "#8F9BB3", fontSize: 12, marginTop: 2 },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#12141D",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
    paddingBottom: 35, // <-- This pushes the icons up above the Realme system buttons
    borderTopWidth: 1,
    borderTopColor: "#1D202D",
  },
});
