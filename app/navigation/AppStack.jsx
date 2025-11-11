import { useAuth } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Alert, TouchableOpacity } from "react-native";
import ChartsScreen from "../screens/(tabs)/ChartsScreen";
import DataScreen from "../screens/(tabs)/DataScreen";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const confirmSignOut = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: handleSignOut },
      ],
      { cancelable: true }
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Data") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Charts") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8b5cf6",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1e293b",
          borderTopColor: "#334155",
        },
        headerStyle: {
          backgroundColor: "#0b1729ff",
        },
        headerTintColor: "#fff",
      })}
    >
      <Tab.Screen
        name="Data"
        component={DataScreen}
        options={{
          title: "Data List",
          headerRight: () => (
            <TouchableOpacity
              onPress={confirmSignOut}
              style={{ paddingRight: 20 }}
            >
              <Ionicons name="log-out-outline" size={24} color="#ef4444" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Charts"
        component={ChartsScreen}
        options={{ title: "Charts" }}
      />
    </Tab.Navigator>
  );
}
