import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {MinusButton, PlusButton} from './app/components/buttons';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(oldState => oldState < 999 ? oldState + 1 : 0)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(oldState => oldState - 1)
    }
  }

  console.log('count', count)

  return (
    <View className="flex-1 bg-gray-900 justify-between items-center">
      {/* Menu Section */}
      <View className="" />

      {/* Row indicator */}
      <Text className="text-gray-200 text-9xl">{count}</Text>

      {/* Buttons */}
      <View className="flex-row items-center justify-between w-full px-6 py-4">
        <MinusButton onPress={() => handleDecrement()} />
        <PlusButton onPress={handleIncrement} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
