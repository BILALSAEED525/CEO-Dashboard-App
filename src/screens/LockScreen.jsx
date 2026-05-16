import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Lock } from "lucide-react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function LockScreen({ onUnlock, onNavigateToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg("Please enter both email and password");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      onUnlock();
    } catch (error) {
      setErrorMsg("Invalid email or master password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.lockContainer}>
      <View style={styles.lockAvatarContainer}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
            }}
            style={styles.lockAvatar}
          />
          <View style={styles.lockBadge}>
            <Lock size={12} color="#3B82F6" />
          </View>
        </View>
        <Text style={styles.lockName}>Fratity Deal</Text>
        <Text style={styles.lockTitle}>CEO at linagie</Text>
      </View>

      <View style={styles.lockCard}>
        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="ceo@linagie.com"
          placeholderTextColor="#4A5568"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Master Password</Text>
        <TextInput
          style={[styles.passwordInput, { letterSpacing: 5 }]}
          placeholder="••••••••"
          placeholderTextColor="#4A5568"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

        <TouchableOpacity
          style={styles.unlockBtn}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.unlockBtnText}>Unlock Dashboard</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onNavigateToSignUp}
          style={{ marginTop: 20 }}
        >
          <Text style={styles.switchText}>
            Don't have an account?{" "}
            <Text style={{ color: "#3B82F6" }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lockContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    marginTop: -40,
  },
  lockAvatarContainer: { alignItems: "center", marginBottom: 24 },
  avatarWrapper: { position: "relative" },
  lockAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#3B82F6",
  },
  lockBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#1D202D",
    padding: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2A2E3D",
  },
  lockName: { color: "#FFF", fontSize: 22, fontWeight: "bold", marginTop: 12 },
  lockTitle: { color: "#8F9BB3", fontSize: 13, marginTop: 4 },
  lockCard: { backgroundColor: "#1D202D", borderRadius: 24, padding: 24 },
  inputLabel: { color: "#8F9BB3", fontSize: 12, marginBottom: 8 },
  passwordInput: {
    backgroundColor: "#12141D",
    color: "#FFF",
    fontSize: 16,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#2A2E3D",
    marginBottom: 16,
  },
  unlockBtn: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  unlockBtnText: { color: "#FFF", fontWeight: "bold", fontSize: 15 },
  errorText: {
    color: "#EF233C",
    fontSize: 12,
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  switchText: { color: "#8F9BB3", fontSize: 13, textAlign: "center" },
});
