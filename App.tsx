import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('Hello');
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to on your app!</Text>
      <Text>Open up App.tsx to on your app!</Text>
      <Text>Open up App.tsx to on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
