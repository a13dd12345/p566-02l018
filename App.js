import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import MyApp from './components/MyApp/MyApp';

// Styles:
import { appStyles as styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textH1}>App X2</Text>
      <MyApp />
    </View>
  );
}
