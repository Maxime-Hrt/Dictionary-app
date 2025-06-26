import { Khmer_400Regular, useFonts as useKhmerFont } from "@expo-google-fonts/khmer";
import { Moul_400Regular, useFonts as useMoulFont } from "@expo-google-fonts/moul";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import '../../global.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [moulLoaded] = useMoulFont({
    Moul_400Regular,
  });

  const [khmerLoaded] = useKhmerFont({
    Khmer_400Regular,
  });

  useEffect(() => {
    if (moulLoaded && khmerLoaded) {
      SplashScreen.hideAsync();
    }
  }, [moulLoaded, khmerLoaded]);

  if (!moulLoaded || !khmerLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
