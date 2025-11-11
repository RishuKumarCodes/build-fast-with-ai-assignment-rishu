# Authenticated Expo App

A fully-featured React Native application built with Expo, featuring user authentication, animated onboarding, and data visualization.

## Features

- **Authentication** - Secure sign-up/sign-in with Clerk
- **Onboarding Flow** - Beautiful animated 4-screen onboarding experience
- **Protected Routes** - Route guards ensuring authenticated access
- **Data Display** - FlatList with pull-to-refresh functionality
- **Data Visualization** - Line, Bar, and Pie charts
- **Persistent Storage** - AsyncStorage for data persistence
- **Smooth Animations** - React Native Reanimated
- **Custom Loading Screen** - Animated loading experience

## Attached video of the app

<video src="./assets/videos/appPreview.mp4" controls width="400"></video>

## Tech Stack

- **Framework**: Expo (React Native)
- **Authentication**: Clerk
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **Charts**: react-native-chart-kit
- **Animations**: react-native-reanimated
- **Styling**: NativeWind (Tailwind CSS)
- **Icons**: @expo/vector-icons
- **Storage**: AsyncStorage

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or Expo Go app)

## You can install and test app from this link itself to prevent overhead of forking and running the project locally

Download Link: <https://expo.dev/accounts/rishukumarcodes/projects/build-fast-with-ai-assignment-rishu/builds/29e18b5e-7f40-49e0-badb-77dd0b2b4e62>

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/RishuKumarCodes/build-fast-with-ai-assignment-rishu.git
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up [Clerk Authentication](https://clerk.com)**

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

4. **Start the development server**

```bash
npx expo start
```

5. **Run on your device**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app

## Project Structure

```
app/
├── navigation/
│   ├── RootNavigator.jsx       # Main navigation logic
│   ├── AuthStack.jsx           # Unprotected routes
│   └── AppStack.jsx            # Protected tab navigator
├── screens/
│   ├── onboarding/
│   │   └── OnboardingScreen.jsx
│   ├── auth/
│   │   ├── SignInScreen.jsx
│   │   └── SignUpScreen.jsx
│   └── (tabs)/
│       ├── DataScreen.jsx      # FlatList with data
│       └── ChartsScreen.jsx    # Data visualizations
├── _layout.tsx                 # Main entry point of the app.
├── constants/
|   ├── theme.js                # Color & styling constants (unused )
|   ├── mockData.js             # Sample data
|   └── onboardingData.js       # Onboarding slides data
├── components/
│   └── LoadingScreen.jsx       # Custom loading animation
```

## Key Features Explained

### Authentication Flow

- Users see onboarding on first launch
- Sign-up with email verification
- Sign-in with Clerk
- Session persistence across app restarts

### Onboarding

- 4 swipeable screens with smooth animations
- Progress indicator (dots)
- Skip button
- Get Started button on final screen

### Data Screen

- Displays 10 product items
- Pull-to-refresh functionality
- Data persisted with AsyncStorage
- Sign-out button

### Charts Screen

- Line chart for revenue trends
- Bar chart for weekly sales
- Pie chart for category distribution
- Summary statistics cards

## 🔐 Environment Variables

Create a `.env` file with:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Your Name - [Your GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- If you've read till the end, thanks for checking out my work. . I believe I've implemented whatever features were asked. Hope you like it.

---
