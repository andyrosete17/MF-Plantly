import { FlatList, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { useRouter } from 'expo-router';
import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { usePlants } from '@/store/plants/hooks';

export default function App() {
  const router = useRouter();
  const plants = usePlants();

  return (
    <FlatList
      data={plants}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={plant => plant.id}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton title="Add a plant" onPress={() => router.navigate('/new')} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite
  },
  contentContainer: {
    padding: 12
  }
});
