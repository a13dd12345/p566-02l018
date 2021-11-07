import { StyleSheet } from 'react-native';

import { Colors } from '../../utils';
import { generalStyles } from '../../styles';

export default {
  ...generalStyles,
  ...StyleSheet.create({
    personUpdateContainer: {
      backgroundColor: Colors.yellowLighter2,
      margin: 5,
      borderColor: Colors.primary,
      borderWidth: 3,
      padding: 3,
    },
    personUpdateContent: {
      textAlign: 'center',
      alignItems: 'center'
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  }),
};
