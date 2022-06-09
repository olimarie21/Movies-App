import * as React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import AppStack from './src/components/stacks/AppStack';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar backgroundColor="#27445C" style='light'/>
        <AppStack/>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 0
  },
});