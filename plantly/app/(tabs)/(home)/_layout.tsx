import { theme } from '@/theme';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import AndDesign from 'react-native-vector-icons/AntDesign';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            <Link href="/new" asChild>
              <Pressable hitSlop={20}>
                <AndDesign name="pluscircleo" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
          )
        }}
      />
      <Stack.Screen name="plants/[plantId]" options={{ title: '' }} />
    </Stack>
  );
}
