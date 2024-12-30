import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { useUserActions } from '@/store/hooks';
import { PlantlyButton } from '@/components/PlantlyButton';

export default function ProfileScreen() {
  const toggleHadOnboarding = useUserActions();

  const handlePress = () => {
    console.log('Button clicked');
    if (toggleHadOnboarding) {
      toggleHadOnboarding();
    } else {
      console.error('toggleHadOnboarding is undefined');
    }
  };

  return (
    <View style={styles.container}>
      <PlantlyButton title="Go back to onboardings" onPress={handlePress} />
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
