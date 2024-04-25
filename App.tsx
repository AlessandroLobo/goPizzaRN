import React, { useEffect, useState, useCallback } from "react";
import { Text, View } from "react-native";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import theme from "@src/theme";
import { Home } from "@src/screens/Home";
import { StatusBar } from "expo-status-bar";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "@src/hooks/auth";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Impede o desaparecimento automático da tela de splash
        await SplashScreen.preventAutoHideAsync();

        // Verifica se as fontes foram carregadas
        if (fontsLoaded) {
          setAppIsReady(true);
        }
      } catch (e) { }
    }

    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Retorna null enquanto a tela de inicialização é exibida
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <StatusBar style="light" translucent backgroundColor="transparent" />

          <AuthProvider>
            <Home />
          </AuthProvider>
        </View>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

