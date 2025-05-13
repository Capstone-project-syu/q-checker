// App.tsx
import { NavigationContainer } from "@react-navigation/native"; // 만약 navigation도 쓴다면
import React from "react";
import { ThemeProvider } from "styled-components/native";
import IndexScreen from "./app/(tabs)/index";
import { theme } from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <IndexScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
}
