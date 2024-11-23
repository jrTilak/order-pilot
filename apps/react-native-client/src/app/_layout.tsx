import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DevToolsBubble } from 'react-native-react-query-devtools';
import '@/styles/tailwind.css'
import { StatusBar } from 'react-native';

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar hidden={true} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(authenticating)/login/index" />
        <Stack.Screen name="(authenticating)/register-now/index" />
        <Stack.Screen name="(authenticating)/forget-password/index" />
      </Stack>
      <DevToolsBubble />
    </QueryClientProvider >
  );
}
