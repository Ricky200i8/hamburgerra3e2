import { Stack } from "expo-router";
import "../global.css";

// Polyfill para Reanimated en web
if (typeof window !== 'undefined' && !(global as any).ReanimatedModule) {
  (global as any).ReanimatedModule = {
    makeMutable: () => ({ value: undefined }),
    makeRemote: () => ({}),
  };
}

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
