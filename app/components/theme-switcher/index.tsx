import { Switch, View } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function ThemeSwitcher() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme()

  const handleSwitch = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <View>
      <Switch
        value={colorScheme === 'dark'}
        onChange={handleSwitch}
        thumbColor={colorScheme === 'light' ? '#fde047' : '#e7e5e4'}
        trackColor={{ false: '#fef9c3', true : '#0c4a6e' }}
      />
    </View>
  )
}