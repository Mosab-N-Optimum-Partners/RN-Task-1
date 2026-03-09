import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, View, Text } from 'react-native';

export function NotFound() {
  const navigation = useNavigation<any>()
  return (
    <View style={ styles.container }>
      <Text>404</Text>
      <Pressable onPress={ () => navigation.navigate('HomeTabs') }>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
