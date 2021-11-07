//myAppStyles
import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import styles from './headerStyles'

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.textH1]}>Header</Text>
    </View>
  );
}

