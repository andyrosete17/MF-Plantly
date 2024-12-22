import { View, StyleSheet, Button } from 'react-native';
import { theme } from '@/theme';
import { useUserActions } from '@/store/hooks';
import { useRouter } from 'expo-router';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarding = useUserActions();

  const handlePress = () => {
    toggleHadOnboarding();
    console.log('onboarding');
    router.replace('/');
  };
  return (
    <View style={styles.container}>
      <Button title="Let me in" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite
  }
});
