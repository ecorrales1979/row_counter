import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-gray-900 justify-between items-center">
      {/* Menu Section */}
      <View className="" />
      {/* Row indicator */}
      <Text className="text-gray-200 text-9xl">0</Text>
      {/* Buttons */}
      <View className="flex-row items-center justify-between w-full px-6 py-4">
        <TouchableOpacity className="rounded-full bg-blue-400 w-24 h-24 items-center justify-center">
          <Text className="text-gray-200 text-6xl leading-none">-</Text>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-blue-400 w-24 h-24 items-center justify-center">
          <Text className="text-gray-200 text-6xl leading-none">+</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
