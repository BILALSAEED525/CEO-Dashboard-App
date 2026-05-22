<div align="center">

# 🏢 CEO Dashboard App

**A sleek executive mobile dashboard for real-time business intelligence — built for leaders who need their KPIs, projects, and alerts in one place.**


<img width="400" height="800" alt="signup" src="https://github.com/user-attachments/assets/003f0b7b-f16f-452d-9bc8-23ff92ddfc06" />

<img width="720" height="1600" alt="login" src="https://github.com/user-attachments/assets/1c3b1978-2095-4ba4-8a16-5d2445924e88" />
<img width="720" height="1600" alt="home" src="https://github.com/user-attachments/assets/3ee6d50f-bb67-4802-947f-423ed160bc72" />
<img width="720" height="1600" alt="finance" src="https://github.com/user-attachments/assets/073955d9-5092-4799-b51d-623aae76ce60" />
<img width="720" height="1600" alt="alerts" src="https://github.com/user-attachments/assets/7345f9cf-5bdd-459a-8c38-e824fa3650e3" />
<img width="720" height="1600" alt="projects" src="https://github.com/user-attachments/assets/2716e5ce-7aa8-46b3-a34e-9563bebe7e3b" />



</div>

---

## 📖 Overview

CEO Dashboard is a React Native mobile application designed for executives to monitor their company's performance at a glance. From revenue figures and project milestones to real-time business alerts and marketing spend — everything a CEO needs is a tap away, wrapped in a sharp dark-mode UI.

---

## ✨ Features

### 🔐 Secure Executive Login
- Branded lock screen with CEO profile photo and title
- **Corporate email** and **master password** authentication via Firebase
- **"Stay Logged In"** — session persisted with AsyncStorage so the dashboard reopens instantly
- Sign up flow to register new CEO accounts

### 🏠 Home — KPI Command Center
- Live **KPI cards** at a glance:
  - **Revenue** — $4.2M with 15% increase indicator
  - **KPI Rate** — 10.14 with 8.08% rise
  - **Margin** — 1,796 against a 33% target
  - **Gross Profit** — $93.3K
  - **Net Income** — $40.2K
  - **Total Reach** — 2,969
- **Monthly summary bar chart** — visualize performance across all 12 months (July highlighted)

### 📁 Projects — Milestone Tracker
- Project cards with **color-coded completion badges**:
  - 🔴 Alpha Phase — 23%
  - 🟠 Beta Release — 27%
  - 🟠 Core Project — 34%
- **Alpha Market Launch** priority panel with **multi-segment progress bars** showing targets at 160%, 200%, and 174%

### 🔔 Alerts — Business Notifications
- Prioritized notification feed with status indicators:
  - 🔴 **Critical** — Revenue dip detected, requires action
  - 🔵 **Info** — Quarterly report auto-generated and saved to cloud
  - 🟢 **Resolved** — Server maintenance complete, all nodes operational
  - 🟢 **Done** — Project Alpha milestone logged, funds allocated
- Each alert shows **timestamp** and **action status** (Action / View / Logged / Done)

### 💰 Finance — Budget & Spend Tracker
- **Financial Figures** ring chart for an instant visual of budget health
- **Marketing Spend** breakdown:
  - Total Budget Allocation — $391K Q3 Target at **+70.5%**
  - Current Q3 Spend — $315K used, $147K remaining at **+50%**

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| React Native + Expo | Cross-platform mobile framework |
| Firebase Authentication | Secure CEO account login & registration |
| AsyncStorage | Persistent login session (stay logged in) |
| React Native SVG | Charts and ring visualizations |
| Lucide React Native | Icon set across the UI |

---

## 📂 Project Structure

```
CEO-Dashboard-App/
│
├── App.js                        # Root — auth state, navigation, bottom nav
│
└── src/
    ├── config/
    │   └── firebase.js           # Firebase initialization & config
    │
    ├── screens/
    │   ├── LockScreen.jsx        # CEO login screen
    │   ├── SignUpScreen.jsx      # Account registration
    │   ├── HomeScreen.jsx        # KPI cards + monthly chart
    │   ├── ProjectsScreen.jsx    # Milestone tracker + progress bars
    │   ├── AlertsScreen.jsx      # Business notification feed
    │   └── FinancialScreen.jsx   # Budget ring chart + spend breakdown
    │
    └── components/
        ├── NavItem.jsx           # Bottom navigation tab item
        ├── AlertCard.jsx         # Individual alert notification card
        ├── ProjectCard.jsx       # Milestone project card
        ├── ProgressBar.jsx       # Multi-segment priority progress bar
        └── FinancialRow.jsx      # Budget/spend row with percentage badge
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Expo CLI](https://docs.expo.dev/) — `npm install -g expo-cli`
- A [Firebase](https://console.firebase.google.com/) project with **Email/Password Authentication** enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/CEO-Dashboard-App.git
cd CEO-Dashboard-App

# Install dependencies
npm install

# Start the Expo dev server
npx expo start
```

Scan the QR code with **Expo Go** on your phone, or press `a` for Android emulator / `i` for iOS simulator.

---

## 🔥 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) → Create a project
2. Under **Authentication**, enable the **Email/Password** sign-in method
3. Copy your project config into `src/config/firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## 🔒 Stay Logged In

After a successful login, the auth token is saved to **AsyncStorage**. On the next app launch, the token is checked first — if valid, the CEO is taken straight to the dashboard without needing to log in again.

```js
// On login success
await AsyncStorage.setItem("@ceo_auth_token", "true");

// On app start
const token = await AsyncStorage.getItem("@ceo_auth_token");
if (token) setIsAuthenticated(true);
```

---

## 📄 License

MIT License — free to use and modify.
