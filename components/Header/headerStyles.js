import { StyleSheet } from 'react-native';

import { Colors } from '../../utils';
import { generalStyles } from '../../styles';

export default {
  ...generalStyles,
  ...StyleSheet.create({
    headerContainer: {
      backgroundColor: Colors.yellowDark,
      margin: 5,
      borderColor: Colors.primary,
      borderWidth: 3,
      padding: 3,
    },
    headerContent: {},
  }),
};
