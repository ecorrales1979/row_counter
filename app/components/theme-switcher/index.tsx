import { Switch, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function ThemeSwitcher() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()

  const handleSwitch = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <View>
      <Switch value={colorScheme === 'dark'} onChange={handleSwitch} />
    </View>
  )
}