import { PropsWithChildren } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
}

export function PlusButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      className="rounded-full bg-green-500 w-24 h-24 items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-slate-800 text-6xl leading-none">+</Text>
    </TouchableOpacity>
  )
}