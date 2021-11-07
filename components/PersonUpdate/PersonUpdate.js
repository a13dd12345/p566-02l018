import * as React from 'react';
import { Text, View, TextInput } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files

// Styles:
import { defaultStyles } from '../../styles';
import personUpdateStyles from './personUpdateStyles';

const styles = { ...defaultStyles, ...personUpdateStyles };

export default function PersonUpdate({ onChangeTextHandler }) {
  return (
    <View style={[styles.personUpdateContainer, styles.personUpdateContent]}>
      <Text style={styles.textH1} >New Person</Text>
      <Text style={styles.textBold} >Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeTextHandler([1, val])}
        placeholder="Person Name"
      />
      <Text style={styles.textBold} >Age</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => onChangeTextHandler([0, val])}
        placeholder="Person Age"
      />
    </View>
  );
}