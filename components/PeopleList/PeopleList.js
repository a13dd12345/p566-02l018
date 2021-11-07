import * as React from 'react';

import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonView from '../PersonView/PersonView';
// Styles:
import styles from './peopleListStyles';

export default function PeopleList({ peopleData }) {
  
  return peopleData.map((person) => {
    return (
      <View style={styles.peopleListContainer}>
        <Text style={[styles.textH1]}>Person</Text>
        <PersonView person={person} />
      </View>
    );
  });
}
