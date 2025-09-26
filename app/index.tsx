import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Homepage 🎉</Text>
      <Button title="Back to Onboarding" onPress={() => router.push('/onboarding')} />
    </View>
  );
}
