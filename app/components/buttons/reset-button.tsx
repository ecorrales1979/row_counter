import { Text, TouchableOpacity } from 'react-native'

interface Props {
  onPress: () => void
}

export function ResetButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      className="rounded-lg bg-teal-500 items-center justify-center px-3 py-0"
      onPress={onPress}
    >
      <Text className="text-slate-800 text-lg leading-none">Reset</Text>
    </TouchableOpacity>
  )
}