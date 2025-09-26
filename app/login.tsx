import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Login Page</Text>
      <Button title="Go to Homepage" onPress={() => router.push('/')} />
    </View>
  );
}
