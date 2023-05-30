import { PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
}

export function MinusButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      className="rounded-full bg-orange-600 w-24 h-24 items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-gray-200 text-6xl leading-none">-</Text>
    </TouchableOpacity>
  )
}