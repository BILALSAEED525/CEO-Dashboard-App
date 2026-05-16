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
import { Lock, Mail } from "lucide-react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function SignUpScreen({ onNavigateToLogin, onSignUpSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSignUp = async () => {
    if (!email || !password) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      onSignUpSuccess();
    } catch (error) {
      // This will force the app to show the EXACT error Firebase is throwing
      setErrorMsg("Error: " + error.message);
      console.log("FULL FIREBASE ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.lockContainer}>
      <View style={styles.lockAvatarContainer}>
        <Text style={styles.lockName}>Create CEO Account</Text>
        <Text style={styles.lockTitle}>Register secure access credentials</Text>
      </View>

      <View style={styles.lockCard}>
        <Text style={styles.inputLabel}>Corporate Email</Text>
        <TextInput
          style={styles.passwordInput}
          placeholder="ceo@linagie.com"
          placeholderTextColor="#4A5568"
          keyboardType="email-address"
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
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.unlockBtnText}>Register & Access</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={onNavigateToLogin} style={{ marginTop: 20 }}>
          <Text style={styles.switchText}>
            Already have an account?{" "}
            <Text style={{ color: "#3B82F6" }}>Log In</Text>
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
    marginTop: -20,
  },
  lockAvatarContainer: { alignItems: "center", marginBottom: 24 },
  lockName: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
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
