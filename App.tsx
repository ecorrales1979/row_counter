import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import {MinusButton, PlusButton} from './app/components/buttons';
import ThemeSwitcher from './app/components/theme-switcher';
import { useColorScheme } from 'nativewind';


export default function App() {
  const [count, setCount] = useState(0);
  const { colorScheme } = useColorScheme()
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  const handleIncrement = () => {
    setCount(oldState => oldState < 999 ? oldState + 1 : 0)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(oldState => oldState - 1)
    }
  }

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView className="flex-1 bg-stone-400 dark:bg-gray-900 justify-between items-center">
      {/* Menu Section */}
      <View className="w-full">
        <ThemeSwitcher />
      </View>

      {/* Row indicator */}
      <Text className="text-gray-900 dark:text-gray-200 text-9xl font-title">{count}</Text>

      {/* Buttons */}
      <View className="flex-row items-center justify-between w-full px-6 py-4">
        <MinusButton onPress={() => handleDecrement()} />
        <PlusButton onPress={handleIncrement} />
      </View>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
    </SafeAreaView>
  );
}
