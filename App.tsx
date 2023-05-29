import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {MinusButton, PlusButton} from './app/components/buttons';

export default function App() {
  return (
    <View className="flex-1 bg-gray-900 justify-between items-center">
      {/* Menu Section */}
      <View className="" />

      {/* Row indicator */}
      <Text className="text-gray-200 text-9xl">0</Text>

      {/* Buttons */}
      <View className="flex-row items-center justify-between w-full px-6 py-4">
        <MinusButton onPress={() => console.log('Presed -')} />
        <PlusButton onPress={() => console.log('Pressed +')} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
