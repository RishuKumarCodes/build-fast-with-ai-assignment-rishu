import LoadingScreen from "@/components/LoadingScreen";
import { useAuth } from "@clerk/clerk-expo";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function RootNavigator() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  return <>{isSignedIn ? <AppStack /> : <AuthStack />}</>;
}
