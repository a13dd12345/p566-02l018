import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import styles from './personViewStyles';

export default function PersonView({ person }) {
  return (
    <View style={styles.personViewContainer}>
      <Text style={[styles.textH1]}>Person View</Text>
      <Text style={[styles.text]}>
        ID: <Text style={[styles.textBold]}>{ person.id } </Text>
      </Text>
      <Text style={[styles.text]}>
        Name: <Text style={[styles.textBold]}>{ person.name } </Text>
      </Text>
      <Text style={[styles.text]}>
        Age: <Text style={[styles.textBold]}>{ person.age } </Text>
      </Text>

    </View>
  );
}
// { Person }
// Person={Person} 
