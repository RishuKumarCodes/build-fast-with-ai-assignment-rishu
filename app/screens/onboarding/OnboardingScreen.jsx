import { onboardingData } from "@/constants/onboardingData";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Easing,
  FadeInLeft,
  FadeInRight,
  FadeOut,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setDirection("right");
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      handleGetStarted();
    }
  };

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem("hasSeenOnboarding", "true");
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Error saving onboarding status:", error);
    }
  };

  const handleScrollEnd = (event) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    if (newIndex > currentIndex) setDirection("right");
    else if (newIndex < currentIndex) setDirection("left");
    setCurrentIndex(newIndex);
  };

  const getFadeInAnimation = (delay = 0, distance = 200) => {
    const base = direction === "right" ? FadeInRight : FadeInLeft;
    const translateX = direction === "right" ? distance : -distance;
    return base
      .duration(700)
      .delay(delay)
      .easing(Easing.out(Easing.exp))
      .withInitialValues({ transform: [{ translateX }] });
  };

  const renderItem = ({ item, index }) => {
    const isActive = index === currentIndex;

    return (
      <View style={styles.slide}>
        {isActive && (
          <>
            {item.image ? (
              <Animated.View
                key={`image-${index}-${currentIndex}`}
                entering={getFadeInAnimation(100, 200)}
                exiting={FadeOut.duration(200)}
                style={styles.imageContainer}
              >
                <Image
                  source={item.image}
                  style={styles.illustration}
                  resizeMode="contain"
                />
              </Animated.View>
            ) : (
              <Animated.View
                key={`icon-${index}-${currentIndex}`}
                entering={getFadeInAnimation(100, 200)}
                exiting={FadeOut.duration(200)}
                style={[styles.iconContainer, { backgroundColor: item.color }]}
              >
                <Ionicons name={item.icon} size={80} color="#fff" />
              </Animated.View>
            )}

            <Animated.Text
              key={`title-${index}-${currentIndex}`}
              entering={getFadeInAnimation(250, 100)}
              exiting={FadeOut.duration(200)}
              style={styles.title}
            >
              {item.title}
            </Animated.Text>

            <Animated.Text
              key={`desc-${index}-${currentIndex}`}
              entering={getFadeInAnimation(400, 80)}
              exiting={FadeOut.duration(200)}
              style={styles.description}
            >
              {item.description}
            </Animated.Text>
          </>
        )}
      </View>
    );
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {onboardingData.map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        extraData={currentIndex}
        onMomentumScrollEnd={handleScrollEnd}
      />

      {renderDots()}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {currentIndex < onboardingData.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={handleGetStarted}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  slide: {
    width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  imageContainer: {
    width: width * 0.8,
    height: 280,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  illustration: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: "center",
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#8b5cf6",
    width: 30,
  },
  inactiveDot: {
    backgroundColor: "#334155",
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#8b5cf6",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  skipButton: {
    position: "absolute",
    top: 50,
    right: 20,
    padding: 10,
  },
  skipText: {
    color: "#94a3b8",
    fontSize: 16,
  },
});
