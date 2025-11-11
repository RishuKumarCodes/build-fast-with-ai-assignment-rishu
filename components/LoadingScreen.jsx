import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function LoadingScreen() {
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);

  useEffect(() => {
    translateY.value = withRepeat(
      withTiming(30, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }, { scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, animatedStyle]}>
        <Ionicons name="rocket" size={60} color="#8b5cf6" />
      </Animated.View>
      <ActivityIndicator size="large" color="#8b5cf6" style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  spinner: {
    position: "absolute",
    bottom: "20%",
  },
});
