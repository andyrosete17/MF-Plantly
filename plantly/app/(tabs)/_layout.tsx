import { Entypo, Feather } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { theme } from '@/theme';
import { useHasFinishedOnboarding } from '@/store/user/hooks';

export default function Layout() {
  const hasFinishedOnboarding = useHasFinishedOnboarding();
  if (!hasFinishedOnboarding) {
    return <Redirect href="onboarding" />;
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
