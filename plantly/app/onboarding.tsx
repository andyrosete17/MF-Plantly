import { StyleSheet, Text, View, Platform } from 'react-native';
import { theme } from '@/theme';
import { useRouter } from 'expo-router';
import { PlantlyButton } from '@/components/PlantlyButton';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { PlantlyImage } from '@/components/PlantyImage';
import { useUserActions } from '@/store/user/hooks';

export default function OnboardingScreen() {
  const router = useRouter();
  const toggleHadOnboarding = useUserActions();

  const handlePress = () => {
    toggleHadOnboarding();
    console.log('onboarding');
    router.replace('/');
  };
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[theme.colorGreen, theme.colorAppleGreen, theme.colorLimeGreen]}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagline}>Keep your plants always healthy and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: theme.colorWhite,
    paddingHorizontal: 8
  },
  heading: {
    fontSize: 42,
    color: theme.colorWhite,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center'
  },
  tagline: {
    fontSize: 34,
    color: theme.colorWhite,
    textAlign: 'center',
    fontFamily: Platform.select({
      ios: 'Caveat-Regular',
      android: 'Caveat_400Regular'
    })
  }
});
